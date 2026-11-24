import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express, { Request, Response, NextFunction } from 'express';
import { join } from 'node:path';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

// Confiar no proxy reverso (Cloudflare / nginx) para x-forwarded-proto
app.set('trust proxy', true);

// ─── Middlewares de redirecionamento (ANTES do static e do Angular handler) ───

/**
 * 1) www → non-www (301)
 */
app.use((req: Request, res: Response, next: NextFunction) => {
  const host = req.hostname;
  if (host && host.startsWith('www.')) {
    const proto = process.env['NODE_ENV'] === 'production' ? 'https' : req.protocol;
    return res.redirect(301, `${proto}://${host.replace(/^www\./, '')}${req.originalUrl}`);
  }
  next();
  return;
});

/**
 * 2) HTTP → HTTPS em produção (via x-forwarded-proto)
 */
app.use((req: Request, res: Response, next: NextFunction) => {
  if (
    process.env['NODE_ENV'] === 'production' &&
    req.headers['x-forwarded-proto'] === 'http'
  ) {
    return res.redirect(301, `https://${req.hostname}${req.originalUrl}`);
  }
  next();
  return;
});

/**
 * 3) Adicionar barra final nas rotas de página (exclui extensões, .well-known, robots.txt, sitemap.xml, llms.txt)
 */
app.use((req: Request, res: Response, next: NextFunction) => {
  const path = req.path;
  const isFile = /\.[^/]+$/.test(path);
  const isWellKnown = path.startsWith('/.well-known');
  const isStaticAsset = /^\/(robots\.txt|sitemap\.xml|llms\.txt)/.test(path);

  if (!isFile && !isWellKnown && !isStaticAsset && !path.endsWith('/')) {
    const query = req.url.includes('?') ? req.url.substring(req.url.indexOf('?')) : '';
    return res.redirect(301, `${path}/${query}`);
  }
  next();
  return;
});

// ─── Arquivos estáticos ───────────────────────────────────────────────────────
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

// ─── Handler Angular (SSR) ───────────────────────────────────────────────────
app.use((req: Request, res: Response, next: NextFunction) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error?: Error) => {
    if (error) {
      throw error;
    }
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
