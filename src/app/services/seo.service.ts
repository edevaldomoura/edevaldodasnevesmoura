import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

const BASE_URL = 'https://edevaldodasnevesmoura.com.br';
const SITE_NAME = 'Edevaldo das Neves Moura';
const PROFILE_PAGE_ID = 'ld-profilepage';

export interface SeoOptions {
  titulo: string;
  descricao: string;
  rota: string;
  tipo?: string;
  /** Use false em páginas sem URL canônica (ex.: 404): remove canonical e og:url. */
  comCanonical?: boolean;
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
    const tipo = opts.tipo ?? 'website';
    const comCanonical = opts.comCanonical ?? true;

    // <title>
    this.title.setTitle(opts.titulo);

    // Basic meta
    this.meta.updateTag({ name: 'description', content: opts.descricao });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: opts.titulo });
    this.meta.updateTag({ property: 'og:description', content: opts.descricao });
    this.meta.updateTag({ property: 'og:type', content: tipo });
    this.meta.updateTag({ property: 'og:site_name', content: SITE_NAME });
    this.meta.updateTag({ property: 'og:locale', content: 'pt_BR' });

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: opts.titulo });
    this.meta.updateTag({ name: 'twitter:description', content: opts.descricao });

    // Canonical + og:url
    if (comCanonical) {
      this.meta.updateTag({ property: 'og:url', content: urlCompleta });
      this.atualizarCanonical(urlCompleta);
    } else {
      this.meta.removeTag(`property='og:url'`);
      this.removerCanonical();
    }
  }

  /** Dados estruturados ProfilePage: usado somente na página inicial. */
  adicionarProfilePage(titulo: string): void {
    this.removerProfilePage();
    const script = this.dom.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute('id', PROFILE_PAGE_ID);
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      '@id': `${BASE_URL}/#profilepage`,
      url: `${BASE_URL}/`,
      inLanguage: 'pt-BR',
      name: titulo,
      isPartOf: { '@id': `${BASE_URL}/#website` },
      mainEntity: { '@type': 'Person', '@id': `${BASE_URL}/#person`, name: SITE_NAME }
    });
    this.dom.head.appendChild(script);
  }

  removerProfilePage(): void {
    this.dom.getElementById(PROFILE_PAGE_ID)?.remove();
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

  private removerCanonical(): void {
    this.dom.querySelector(`link[rel='canonical']`)?.remove();
  }
}
