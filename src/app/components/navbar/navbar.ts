import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogosTecnologiaComponent } from '../logos-tecnologia/logos-tecnologia';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LogosTecnologiaComponent],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  menuAberto = signal(false);

  alternarMenu(): void {
    this.menuAberto.update((valor) => !valor);
  }

  fecharMenu(): void {
    this.menuAberto.set(false);
  }
}
