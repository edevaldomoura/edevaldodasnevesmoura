import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-nao-encontrado',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nao-encontrado.html',
})
export class NaoEncontradoComponent implements OnInit {
  private seoService = inject(SeoService);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.seoService.atualizarMetaTags({
      titulo: 'Página Não Encontrada | Edevaldo das Neves Moura',
      descricao: 'Esta página não existe. Volte para o portfólio oficial de Edevaldo das Neves Moura.',
      rota: '/404',
      comCanonical: false
    });
    this.meta.updateTag({ name: 'robots', content: 'noindex, nofollow' });
  }
}
