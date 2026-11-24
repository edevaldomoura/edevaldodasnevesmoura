import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio';
import { SobreComponent } from './pages/sobre/sobre';
import { ExperienciaComponent } from './pages/experiencia/experiencia';
import { FormacaoComponent } from './pages/formacao/formacao';
import { ContatoComponent } from './pages/contato/contato';
import { NaoEncontradoComponent } from './pages/nao-encontrado/nao-encontrado';

export const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    title: 'Edevaldo das Neves Moura | Analista de Sistemas & Full Stack',
  },
  {
    path: 'sobre',
    component: SobreComponent,
    title: 'Sobre & Especialidades | Edevaldo das Neves Moura',
  },
  {
    path: 'experiencia',
    component: ExperienciaComponent,
    title: 'Experiência Profissional | Edevaldo das Neves Moura',
  },
  {
    path: 'formacao',
    component: FormacaoComponent,
    title: 'Formação Acadêmica & Habilidades | Edevaldo das Neves Moura',
  },
  {
    path: 'contato',
    component: ContatoComponent,
    title: 'Contato | Edevaldo das Neves Moura - Analista de Sistemas',
  },
  {
    path: '**',
    component: NaoEncontradoComponent,
    title: 'Página Não Encontrada | Edevaldo das Neves Moura',
  },
];
