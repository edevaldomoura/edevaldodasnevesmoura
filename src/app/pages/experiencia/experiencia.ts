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
      descricao: 'Experiência de Edevaldo das Neves Moura: 20 anos como Analista de Sistemas, com ERPs TOTVS Protheus e RM, DBA, Cloud e docência em tecnologia.',
      rota: '/experiencia/'
    });
  }
}
