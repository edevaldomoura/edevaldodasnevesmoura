import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogosTecnologiaComponent } from './logos-tecnologia';
import { LOGOS_TECNOLOGIA } from './logos-tecnologia.data';

describe('LogosTecnologiaComponent', () => {
  let fixture: ComponentFixture<LogosTecnologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogosTecnologiaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogosTecnologiaComponent);
    await fixture.whenStable();
  });

  it('renderiza um link por logo, com https e rel seguro', () => {
    const links: HTMLAnchorElement[] = Array.from(
      fixture.nativeElement.querySelectorAll('a.logo-link'),
    );
    expect(links.length).toBe(LOGOS_TECNOLOGIA.length);
    for (const link of links) {
      expect(link.getAttribute('href')).toMatch(/^https:\/\//);
      expect(link.getAttribute('rel')).toContain('noopener');
    }
  });

  it('inclui o GitHub com texto acessível', () => {
    expect(fixture.nativeElement.textContent).toContain('GitHub de Edevaldo das Neves Moura');
  });

  it('possui ids únicos e caminhos válidos com mais de 50 caracteres iniciando com M ou m', () => {
    const ids = LOGOS_TECNOLOGIA.map((l) => l.id);
    const idsUnicos = new Set(ids);
    expect(idsUnicos.size).toBe(ids.length);

    for (const logo of LOGOS_TECNOLOGIA) {
      expect(logo.caminho.length).toBeGreaterThan(50);
      expect(logo.caminho).toMatch(/^[Mm]/);
    }
  });
});
