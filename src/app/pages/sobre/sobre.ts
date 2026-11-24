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
      descricao: 'Conheça o perfil técnico multidisciplinar de Edevaldo das Neves Moura: Desenvolvimento Web, Mobile e Desktop, Servidores Linux/Windows, Cloud AWS/Azure/GCP e Segurança da Informação.',
      rota: '/sobre/'
    });
  }
}
