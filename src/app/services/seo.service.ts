import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

const BASE_URL = 'https://edevaldodasnevesmoura.com.br';
const SITE_NAME = 'Edevaldo das Neves Moura';
const DEFAULT_IMAGE = `${BASE_URL}/img/og-image.jpg`;

export interface SeoOptions {
  titulo: string;
  descricao: string;
  rota: string;
  imagem?: string;
  tipo?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private meta = inject(Meta);
  private title = inject(Title);
  private dom = inject(DOCUMENT);

  atualizarMetaTags(opts: SeoOptions): void {
    const urlCompleta = `${BASE_URL}${opts.rota}`;
    const imagem = opts.imagem ?? DEFAULT_IMAGE;
    const tipo = opts.tipo ?? 'website';

    // <title>
    this.title.setTitle(opts.titulo);

    // Basic meta
    this.meta.updateTag({ name: 'description', content: opts.descricao });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: opts.titulo });
    this.meta.updateTag({ property: 'og:description', content: opts.descricao });
    this.meta.updateTag({ property: 'og:url', content: urlCompleta });
    this.meta.updateTag({ property: 'og:type', content: tipo });
    this.meta.updateTag({ property: 'og:site_name', content: SITE_NAME });
    this.meta.updateTag({ property: 'og:locale', content: 'pt_BR' });
    this.meta.updateTag({ property: 'og:image', content: imagem });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
    this.meta.updateTag({ property: 'og:image:alt', content: `${SITE_NAME} - Analista de Sistemas` });

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: opts.titulo });
    this.meta.updateTag({ name: 'twitter:description', content: opts.descricao });
    this.meta.updateTag({ name: 'twitter:image', content: imagem });

    // Canonical
    this.atualizarCanonical(urlCompleta);
  }

  private atualizarCanonical(url: string): void {
    const head = this.dom.getElementsByTagName('head')[0];
    let element: HTMLLinkElement | null = this.dom.querySelector(`link[rel='canonical']`);

    if (!element) {
      element = this.dom.createElement('link') as HTMLLinkElement;
      element.setAttribute('rel', 'canonical');
      head.appendChild(element);
    }
    element.setAttribute('href', url);
  }
}
