import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aula2',
  imports: [CommonModule],
  templateUrl: './aula2.html',
  styleUrl: './aula2.css',
})
export class Aula2 {
  estaLogado = true;
  perfil = 'admin';

  produtos = [
    { id: 1, nome: 'Notebook' },
    { id: 2, nome: 'Teclado' },
    { id: 3, nome: 'Mouse' },
  ];

  alternarLogin() {
    this.estaLogado = !this.estaLogado;
  }
}
