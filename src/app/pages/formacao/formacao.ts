import { Component, inject, OnInit, signal, HostListener, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SeoService } from '../../services/seo.service';

export interface CertificadoItem {
  id: string;
  nomeCurso: string;
  instituicao: string;
  emissao: string;
  titulo: string;
  subtitulo: string;
  descricao?: string;
  grau?: string;
  periodo?: string;
  conclusao?: string;
  colacao?: string;
  imagemUrl: string;
  altText: string;
  tipoDoc?: string;
}

export type DiplomaItem = CertificadoItem;

@Component({
  selector: 'app-formacao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formacao.html',
  styleUrl: './formacao.css',
})
export class FormacaoComponent implements OnInit {
  private seoService = inject(SeoService);
  private platformId = inject(PLATFORM_ID);

  readonly diplomaAds: CertificadoItem = {
    id: 'ads-unicsul',
    nomeCurso: 'Graduação Superior em Análise e Desenvolvimento de Sistemas',
    titulo: 'Diploma (CST) Curso Superior de Tecnologia',
    subtitulo: 'Análise e Desenvolvimento de Sistemas',
    instituicao: 'Universidade Cruzeiro do Sul (UNICSUL)',
    grau: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    periodo: '2018 – 2020',
    conclusao: '30 de junho de 2020',
    colacao: '03 de agosto de 2020',
    emissao: '11 de setembro de 2020',
    descricao: 'Diploma oficial de Graduação Superior emitido e registrado pela Universidade Cruzeiro do Sul, reconhecido pelo Ministério da Educação (MEC), certificando a outorga de grau em Análise e Desenvolvimento de Sistemas.',
    imagemUrl: '/img/diploma-cst-unicsul.jpg',
    altText: 'Diploma de Graduação Superior em Análise e Desenvolvimento de Sistemas - Universidade Cruzeiro do Sul',
    tipoDoc: 'Diploma Oficial'
  };

  readonly certificados: CertificadoItem[] = [
    {
      id: 'giac-security',
      nomeCurso: 'GIAC Security Essentials',
      instituicao: 'Alura',
      emissao: 'Emitida em out. de 2025',
      titulo: 'Ciber Segurança',
      subtitulo: 'Fundamentos e Segurança em redes',
      descricao: 'Fundamentos e práticas de segurança defensiva em redes corporativas, análise de vulnerabilidades e proteção de infraestrutura.',
      imagemUrl: 'exemplo.jpg',
      altText: 'Certificado Ciber Segurança - Alura'
    },
    {
      id: 'devops-docker',
      nomeCurso: 'DevOps - Docker',
      instituicao: 'Alura',
      emissao: 'Emitida em out. de 2025',
      titulo: 'DevOps - Docker',
      subtitulo: 'DevOps: Construindo e gerindo containers com Docker',
      descricao: 'Criação de imagens, Dockerfile, redes, volumes e orquestração de containers para ambientes de desenvolvimento e produção.',
      imagemUrl: 'exemplo.jpg',
      altText: 'Certificado DevOps Docker - Alura'
    },
    {
      id: 'linux-terminal',
      nomeCurso: 'Certificação Linux Essentials',
      instituicao: 'Alura',
      emissao: 'Emitida em out. de 2025',
      titulo: 'Curso Linux',
      subtitulo: 'Comandos de Terminal, Administração, sustentação e segurança',
      descricao: 'Operação de terminal Bash, administração de serviços, monitoramento, sustentação e segurança em sistemas Linux.',
      imagemUrl: 'exemplo.jpg',
      altText: 'Certificado Linux Comandos de Terminal - Alura'
    },
    {
      id: 'linux-usuarios',
      nomeCurso: 'Certificação Linux Essentials',
      instituicao: 'Alura',
      emissao: 'Emitida em out. de 2025',
      titulo: 'Curso Linux',
      subtitulo: 'Administração de usuário, permissões e dispositivos',
      descricao: 'Gerenciamento de contas de usuários, grupos, permissões especiais, montagem de sistemas de arquivos e periféricos.',
      imagemUrl: 'exemplo.jpg',
      altText: 'Certificado Linux Administração de Usuários - Alura'
    },
    {
      id: 'prog-php',
      nomeCurso: 'Programação PHP',
      instituicao: 'Curso em Vídeo',
      emissao: 'Emitida em set. de 2019',
      titulo: 'Programação PHP',
      subtitulo: 'Desenvolvimento de sistemas em PHP',
      descricao: 'Desenvolvimento de aplicações web dinâmicas em PHP com integração a formulários e servidores.',
      imagemUrl: 'exemplo.jpg',
      altText: 'Certificado Programação PHP - Curso em Vídeo'
    },
    {
      id: 'bd-mysql',
      nomeCurso: 'Banco de Dados MYSQL',
      instituicao: 'Curso em Vídeo',
      emissao: 'Emitida em mai. de 2019',
      titulo: 'Banco de Dados MYSQL',
      subtitulo: 'MYSQL - Querys, Administração, sustentação e segurança',
      descricao: 'Modelagem relacional, consultas SQL avançadas, índices, rotinas de administração, sustentação e segurança em MySQL.',
      imagemUrl: 'exemplo.jpg',
      altText: 'Certificado Banco de Dados MySQL - Curso em Vídeo'
    },
    {
      id: 'algoritmos',
      nomeCurso: 'Algoritmos',
      instituicao: 'Curso em Vídeo',
      emissao: 'Emitida em jul. de 2019',
      titulo: 'Curso de Algoritmos',
      subtitulo: 'Lógica de programação',
      descricao: 'Estruturação de pensamento lógico, variáveis, vetores, matrizes, procedimentos e funções algorítmicas.',
      imagemUrl: 'exemplo.jpg',
      altText: 'Certificado Algoritmos - Curso em Vídeo'
    },
    {
      id: 'prog-java',
      nomeCurso: 'Programação Java',
      instituicao: 'Curso em Vídeo',
      emissao: 'Emitida em jan. de 2019',
      titulo: 'Curso Java',
      subtitulo: 'Desenvolvimento Java',
      descricao: 'Sintaxe e fundamentos da plataforma Java, estruturas condicionais e desenvolvimento de aplicações estruturadas.',
      imagemUrl: 'exemplo.jpg',
      altText: 'Certificado Programação Java - Curso em Vídeo'
    },
    {
      id: 'java-poo',
      nomeCurso: 'Java POO',
      instituicao: 'Curso em Vídeo',
      emissao: 'Emitida em jan. de 2019',
      titulo: 'Java POO',
      subtitulo: 'Desenvolvimento Java Orientado a Objetos',
      descricao: 'Pilares da orientação a objetos em Java: encapsulamento, herança, polimorfismo e interfaces.',
      imagemUrl: 'exemplo.jpg',
      altText: 'Certificado Java POO - Curso em Vídeo'
    },
    {
      id: 'php-poo',
      nomeCurso: 'Curso POO PHP',
      instituicao: 'Curso em Vídeo',
      emissao: 'Emitida em out. de 2019',
      titulo: 'Curso POO PHP',
      subtitulo: 'Programação web orientada a objetos',
      descricao: 'Aplicação prática dos conceitos de POO em PHP para desenvolvimento de sistemas web modulares.',
      imagemUrl: 'exemplo.jpg',
      altText: 'Certificado POO PHP - Curso em Vídeo'
    },
    {
      id: 'html5',
      nomeCurso: 'Curso de Html5',
      instituicao: 'Curso em Vídeo',
      emissao: 'Emitida em nov. de 2019',
      titulo: 'HTML5',
      subtitulo: 'Desenvolvimento de Front end de sistemas web',
      descricao: 'Construção de páginas web semânticas modernas com HTML5, multimídia e formulários.',
      imagemUrl: 'exemplo.jpg',
      altText: 'Certificado HTML5 - Curso em Vídeo'
    },
    {
      id: 'prog-python',
      nomeCurso: 'Programação Python',
      instituicao: 'Curso em Vídeo',
      emissao: 'Emitida em mar. de 2020',
      titulo: 'Programação Python',
      subtitulo: 'Desenvolvimento de sistemas em Python',
      descricao: 'Lógica aplicada, manipulação de dados, automação e desenvolvimento de programas em Python.',
      imagemUrl: 'exemplo.jpg',
      altText: 'Certificado Programação Python - Curso em Vídeo'
    },
    {
      id: 'google-education',
      nomeCurso: 'Certificações do Google for Education',
      instituicao: 'Google Labs',
      emissao: 'Emitida em dez. de 2020',
      titulo: 'Google For Education',
      subtitulo: 'Ferramentas google, administração, sustentação e auditoria',
      descricao: 'Gestão administrativa, sustentação de plataformas de colaboração, controle de acessos e auditoria no Google Workspace.',
      imagemUrl: 'exemplo.jpg',
      altText: 'Certificado Google for Education - Google Labs'
    },
    {
      id: 'hardware-microcamp',
      nomeCurso: 'Hardware',
      instituicao: 'MicrocampSP',
      emissao: 'Emitida em jun. de 2013',
      titulo: 'Curso de Hardware',
      subtitulo: 'Eletrônica e Elétrica, Hardware Teórico e Prático, Redes e Linux',
      descricao: 'Eletrônica, montagem, manutenção, cabeamento estruturado de redes, redes sem fio, MS-DOS, Windows e Linux.',
      imagemUrl: 'exemplo.jpg',
      altText: 'Certificado Hardware - MicrocampSP'
    },
    {
      id: 'webdesign-microcamp',
      nomeCurso: 'Web Design',
      instituicao: 'MicrocampSP',
      emissao: 'Emitida em nov. de 2011',
      titulo: 'Web Design',
      subtitulo: 'Desenvolvimento de sistemas para internet',
      descricao: 'Criação de interfaces visuais, layout digital e desenvolvimento de soluções web para a internet.',
      imagemUrl: 'exemplo.jpg',
      altText: 'Certificado Web Design - MicrocampSP'
    },
    {
      id: 'ti-microcamp',
      nomeCurso: 'Tecnologias da Informação',
      instituicao: 'MicrocampSP',
      emissao: 'Emitida em mar. de 2013',
      titulo: 'Tecnologias da Informação',
      subtitulo: 'Fundamentos de Computação, Lógica de Programação e Algoritmos, POO',
      descricao: 'Fundamentos da ciência da computação, lógica de programação, análise de algoritmos e orientação a objetos.',
      imagemUrl: 'exemplo.jpg',
      altText: 'Certificado Tecnologias da Informação - MicrocampSP'
    },
    {
      id: 'sistemas-internet-cenlep',
      nomeCurso: 'Sistemas de Internet',
      instituicao: 'CENLEP Educação Profissional',
      emissao: 'Emitida em dez. de 2011',
      titulo: 'Sistemas de Internet',
      subtitulo: 'Programação de sistemas web',
      descricao: 'Desenvolvimento e integração de sistemas dinâmicos para a internet.',
      imagemUrl: 'exemplo.jpg',
      altText: 'Certificado Sistemas de Internet - CENLEP'
    },
    {
      id: 'webdesign-cenlep',
      nomeCurso: 'Web Design',
      instituicao: 'CENLEP Educação Profissional',
      emissao: 'Emitida em jul. de 2011',
      titulo: 'Web Design',
      subtitulo: 'Desenvolvimento de Websites',
      descricao: 'Planejamento e construção de websites comerciais e institucionais com padrões web.',
      imagemUrl: 'exemplo.jpg',
      altText: 'Certificado Web Design - CENLEP'
    },
    {
      id: 'manutencao-senai',
      nomeCurso: 'Montagem e Manutenção de Computadores',
      instituicao: 'Senai São Paulo',
      emissao: 'Emitida em mai. de 2000',
      titulo: 'Montagem e Manutenção de Computadores',
      subtitulo: 'Software, Hardware, componentes, montagem e manutenção',
      descricao: 'Arquitetura de microcomputadores, diagnóstico de falhas em placas e periféricos, montagem e manutenção.',
      imagemUrl: 'exemplo.jpg',
      altText: 'Certificado Montagem e Manutenção de Computadores - Senai SP'
    },
    {
      id: 'games-microcamp',
      nomeCurso: 'Desenvolvimento de Games',
      instituicao: 'MicrocampSP',
      emissao: 'Emitida em ago. de 2013',
      titulo: 'Desenvolvimento de Games',
      subtitulo: 'Lógica de programação, linguagem C#, Unity, 3DMax, Cenários',
      descricao: 'Desenvolvimento de jogos digitais, lógica de programação em C#, engine Unity, modelagem 3DMax e animação.',
      imagemUrl: 'exemplo.jpg',
      altText: 'Certificado Desenvolvimento de Games - MicrocampSP'
    },
    {
      id: 'lideranca-microcamp',
      nomeCurso: 'Curso de Liderança',
      instituicao: 'MicrocampSP',
      emissao: 'Emitida em jan. de 2014',
      titulo: 'Curso de Liderança',
      subtitulo: 'Líderes que fazem a diferença',
      descricao: 'Liderança participativa, inteligência emocional, gestão de pessoas e trabalho em equipe.',
      imagemUrl: 'exemplo.jpg',
      altText: 'Certificado Curso de Liderança - MicrocampSP'
    },
    {
      id: 'powerpoint-expedito',
      nomeCurso: 'Microsoft Office - Power Point',
      instituicao: 'Núcleo Cultural Santo Expedito',
      emissao: 'Emitida em set. de 2000',
      titulo: 'Microsoft Office - Power Point',
      subtitulo: 'Desenvolvimento de slides e apresentações',
      descricao: 'Design e estruturação de apresentações corporativas e acadêmicas multimídia.',
      imagemUrl: 'exemplo.jpg',
      altText: 'Certificado Microsoft PowerPoint - Núcleo Cultural Santo Expedito'
    },
    {
      id: 'excel-expedito',
      nomeCurso: 'Microsoft Office - Excel',
      instituicao: 'Núcleo Cultural Santo Expedito',
      emissao: 'Emitida em out. de 2000',
      titulo: 'Microsoft Office - Excel',
      subtitulo: 'Desenvolvimento de planilhas e dados',
      descricao: 'Elaboração de planilhas de cálculo, automação com fórmulas e análise de dados tabulares.',
      imagemUrl: 'exemplo.jpg',
      altText: 'Certificado Microsoft Excel - Núcleo Cultural Santo Expedito'
    },
    {
      id: 'word-expedito',
      nomeCurso: 'Microsoft Office - Word',
      instituicao: 'Núcleo Cultural Santo Expedito',
      emissao: 'Emitida em jul. de 2000',
      titulo: 'Microsoft Office - Word',
      subtitulo: 'Desenvolvimento de documentos oficiais',
      descricao: 'Editoração eletrônica, formatação normativa de documentos corporativos e ofícios.',
      imagemUrl: 'exemplo.jpg',
      altText: 'Certificado Microsoft Word - Núcleo Cultural Santo Expedito'
    },
    {
      id: 'windows-expedito',
      nomeCurso: 'Informática e Sistemas Operacionais',
      instituicao: 'Núcleo Cultural Santo Expedito',
      emissao: 'Emitida em jun. de 2000',
      titulo: 'Informática e Sistemas Operacionais',
      subtitulo: 'Windows 98',
      descricao: 'Fundamentos de informática, operação de computadores pessoais e ambiente Windows.',
      imagemUrl: 'exemplo.jpg',
      altText: 'Certificado Informática e Sistemas Operacionais - Núcleo Cultural Santo Expedito'
    },
    {
      id: 'auxiliar-escritorio',
      nomeCurso: 'Auxiliar de Escritório',
      instituicao: 'Núcleo Cultural Santo Expedito',
      emissao: 'Emitida em abr. de 1996',
      titulo: 'Auxiliar de Escritório',
      subtitulo: 'Digitação, Normas documentais',
      descricao: 'Procedimentos administrativos, elaboração e organização de documentação comercial.',
      imagemUrl: 'exemplo.jpg',
      altText: 'Certificado Auxiliar de Escritório - Núcleo Cultural Santo Expedito'
    },
    {
      id: 'datilografia',
      nomeCurso: 'Datilografia',
      instituicao: 'Núcleo Cultural Santo Expedito',
      emissao: 'Emitida em abr. de 1996',
      titulo: 'Datilografia',
      subtitulo: 'Conceitos de digitação e Manutenção de Datilógrafos',
      descricao: 'Técnica de digitação por toque com precisão, agilidade e manutenção mecânica.',
      imagemUrl: 'exemplo.jpg',
      altText: 'Certificado Datilografia - Núcleo Cultural Santo Expedito'
    }
  ];

  modalAberto = signal(false);
  lightboxAberto = signal(false);
  zoomNivel = signal(1); // 1.0 (ajuste), 1.4, 1.8, 2.2
  diplomaAtivo = signal<CertificadoItem | null>(null);

  ngOnInit(): void {
    this.seoService.atualizarMetaTags({
      titulo: 'Formação Acadêmica & Habilidades | Edevaldo das Neves Moura',
      descricao: 'Formação acadêmica em Análise e Desenvolvimento de Sistemas pela Universidade Cruzeiro do Sul, cursos técnicos e competências em Engenharia de Software, DevOps e Metodologias Ágeis.',
      rota: '/formacao/'
    });
  }

  abrirModal(item: CertificadoItem): void {
    this.diplomaAtivo.set(item);
    this.zoomNivel.set(1);
    this.modalAberto.set(true);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
    }
  }

  fecharModal(): void {
    this.lightboxAberto.set(false);
    this.modalAberto.set(false);
    this.zoomNivel.set(1);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  abrirLightbox(): void {
    this.lightboxAberto.set(true);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
    }
  }

  fecharLightbox(): void {
    this.lightboxAberto.set(false);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = this.modalAberto() ? 'hidden' : '';
    }
  }

  toggleZoom(): void {
    this.zoomNivel.update(z => (z === 1 ? 1.6 : 1));
  }

  aumentarZoom(): void {
    this.zoomNivel.update(z => Math.min(2.2, +(z + 0.3).toFixed(1)));
  }

  diminuirZoom(): void {
    this.zoomNivel.update(z => Math.max(1, +(z - 0.3).toFixed(1)));
  }

  resetarZoom(): void {
    this.zoomNivel.set(1);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.lightboxAberto()) {
      this.fecharLightbox();
    } else if (this.modalAberto()) {
      this.fecharModal();
    }
  }
}
