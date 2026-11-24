import { Component } from '@angular/core';
import { LOGOS_TECNOLOGIA } from './logos-tecnologia.data';

@Component({
  selector: 'app-logos-tecnologia',
  standalone: true,
  templateUrl: './logos-tecnologia.html',
  styleUrl: './logos-tecnologia.css',
})
export class LogosTecnologiaComponent {
  protected readonly logos = LOGOS_TECNOLOGIA;
}
