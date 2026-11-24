import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

const TITULO = 'Edevaldo das Neves Moura | Analista de Sistemas & Full Stack';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inicio.html',
})
export class InicioComponent implements OnInit, OnDestroy {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.atualizarMetaTags({
      titulo: TITULO,
      descricao: 'Currículo e portfólio de Edevaldo das Neves Moura: Analista de Sistemas com 20 anos de experiência em Full Stack, DevOps, Cloud e DBA.',
      rota: '/',
      tipo: 'profile'
    });
    this.seoService.adicionarProfilePage(TITULO);
  }

  ngOnDestroy(): void {
    this.seoService.removerProfilePage();
  }
}
