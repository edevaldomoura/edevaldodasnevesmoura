import { Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-sobre',
  standalone: true,
  templateUrl: './sobre.html',
})
export class SobreComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.atualizarMetaTags({
      titulo: 'Sobre & Especialidades | Edevaldo das Neves Moura',
      descricao: 'Perfil técnico de Edevaldo das Neves Moura: desenvolvimento Full Stack, servidores Linux e Windows, Cloud (AWS, Azure, GCP) e segurança da informação.',
      rota: '/sobre/'
    });
  }
}
