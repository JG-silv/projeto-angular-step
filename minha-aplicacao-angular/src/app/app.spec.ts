import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the lesson and administration components', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-aula3')).toBeTruthy();
    expect(compiled.querySelector('app-painel-adm')).toBeTruthy();
    expect(compiled.querySelector('h1')?.textContent).toContain('Aula 3 - Data Binding e Pipes');
    expect(compiled.textContent).toContain('ALICE');
    expect(compiled.textContent).toContain('5.000,00');
  });
});
