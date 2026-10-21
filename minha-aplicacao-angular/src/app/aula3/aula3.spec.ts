import { TestBed } from '@angular/core/testing';
import { Aula3 } from './aula3';

describe('Aula3', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aula3],
    }).compileComponents();
  });

  it('should render formatted values and two-way bound name', async () => {
    const fixture = TestBed.createComponent(Aula3);
    await fixture.whenStable();

    const element = fixture.nativeElement as HTMLElement;
    const input = element.querySelector('input');
    expect(element.querySelector('h2')?.textContent).toContain('FABIO');
    expect(element.textContent).toContain('Preço do produto: R$ 199,90');

    if (!input) {
      throw new Error('Name input was not rendered');
    }
    input.value = 'Ana';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(element.textContent).toContain('Nome digitado: Ana');
    expect(element.querySelector('h2')?.textContent).toContain('ANA');
  });

  it('should toggle the message button disabled state', async () => {
    const fixture = TestBed.createComponent(Aula3);
    await fixture.whenStable();

    const element = fixture.nativeElement as HTMLElement;
    const buttons = element.querySelectorAll('button');
    const toggleButton = buttons[0];
    const messageButton = buttons[1] as HTMLButtonElement;

    toggleButton.click();
    fixture.detectChanges();
    expect(messageButton.disabled).toBe(true);

    toggleButton.click();
    fixture.detectChanges();
    expect(messageButton.disabled).toBe(false);
  });
});
