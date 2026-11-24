import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inicio.html',
})
export class InicioComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.atualizarMetaTags({
      titulo: 'Edevaldo das Neves Moura | Analista de Sistemas & Full Stack',
      descricao: 'Currículo oficial e portfólio de Edevaldo das Neves Moura, Analista de Sistemas com 20 anos de atuação, AI-First Developer, DevOps, DBA e Pentester, Desenvolvedor Full Stack, Especialista Cloud e Segurança da Informação.',
      rota: '/',
      tipo: 'profile'
    });
  }
}
