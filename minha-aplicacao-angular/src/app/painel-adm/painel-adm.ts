import { Component } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt-BR');

interface Usuario {
  id: number;
  nome: string;
  email: string;
  salario: number;
}

@Component({
  selector: 'app-painel-adm',
  imports: [CommonModule],
  templateUrl: './painel-adm.html',
  styleUrl: './painel-adm.css',
})
export class PainelAdm {
  usuarios: Usuario[] = [
    { id: 1, nome: 'Alice', email: 'alice@example.com', salario: 5000 },
    { id: 2, nome: 'Bob', email: 'bob@example.com', salario: 2000 },
    { id: 3, nome: 'Charlie', email: 'charlie@example.com', salario: 9000 },
  ];
}
