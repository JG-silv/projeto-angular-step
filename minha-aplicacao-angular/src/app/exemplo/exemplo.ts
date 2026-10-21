import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo',
  imports: [],
  templateUrl: './exemplo.html',
  styleUrl: './exemplo.css',
})
export class Exemplo {
  nome = 'Fabio';

  mudarNome() {
    this.nome = 'Angular Dev';
  }
}
