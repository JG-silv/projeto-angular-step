import { TestBed } from '@angular/core/testing';
import { Aula2 } from './aula2';

describe('Aula2', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aula2],
    }).compileComponents();
  });

  it('should render control flow and product list', async () => {
    const fixture = TestBed.createComponent(Aula2);
    await fixture.whenStable();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.textContent).toContain('Logado');
    expect(element.textContent).toContain('Admin');
    expect(element.querySelectorAll('li')).toHaveLength(3);
  });

  it('should toggle login status and ngClass', async () => {
    const fixture = TestBed.createComponent(Aula2);
    await fixture.whenStable();

    const element = fixture.nativeElement as HTMLElement;
    element.querySelector('button')?.click();
    fixture.detectChanges();

    expect(element.textContent).toContain('Não logado');
    expect(element.querySelector('.logado')).toBeNull();
  });
});
