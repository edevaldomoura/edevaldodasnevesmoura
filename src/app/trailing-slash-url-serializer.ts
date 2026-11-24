import { DefaultUrlSerializer, UrlTree } from '@angular/router';

/**
 * Gera as URLs internas sempre com barra final (/sobre/), o mesmo formato do
 * canonical, do sitemap e do que a Cloudflare Pages serve (/sobre redireciona
 * para /sobre/). Sem isto o Angular remove a barra e cada clique no menu
 * passaria por um redirecionamento.
 */
export class TrailingSlashUrlSerializer extends DefaultUrlSerializer {
  override serialize(tree: UrlTree): string {
    const url = super.serialize(tree);
    const fim = url.search(/[?#]/);
    const caminho = fim === -1 ? url : url.slice(0, fim);
    const resto = fim === -1 ? '' : url.slice(fim);
    return caminho.endsWith('/') ? url : `${caminho}/${resto}`;
  }
}
