import { Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  templateUrl: './experiencia.html',
})
export class ExperienciaComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.atualizarMetaTags({
      titulo: 'Experiência Profissional | Edevaldo das Neves Moura',
      descricao: 'Experiência profissional de Edevaldo das Neves Moura: 20 anos atuando como Analista de Sistemas, implantação de ERP TOTVS Protheus e RM, DBA, Cloud AWS e Docência em Tecnologia.',
      rota: '/experiencia/'
    });
  }
}
