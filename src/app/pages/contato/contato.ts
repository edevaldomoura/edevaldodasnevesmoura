import { Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-contato',
  standalone: true,
  templateUrl: './contato.html',
})
export class ContatoComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.atualizarMetaTags({
      titulo: 'Contato | Edevaldo das Neves Moura - Analista de Sistemas',
      descricao: 'Canais oficiais de contato de Edevaldo das Neves Moura, Analista de Sistemas e Desenvolvedor Full Stack. Conecte-se via e-mail, LinkedIn ou GitHub.',
      rota: '/contato/'
    });
  }
}
