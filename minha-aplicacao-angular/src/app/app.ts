import { Component } from '@angular/core';
import { Aula3 } from './aula3/aula3';
import { PainelAdm } from './painel-adm/painel-adm';

@Component({
  selector: 'app-root',
  imports: [Aula3, PainelAdm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
