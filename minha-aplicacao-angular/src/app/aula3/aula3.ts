import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

registerLocaleData(localePt, 'pt-BR');

@Component({
  selector: 'app-aula3',
  imports: [CommonModule, FormsModule],
  templateUrl: './aula3.html',
  styleUrl: './aula3.css',
})
export class Aula3 {
  nome = 'Fabio';
  botaoDesabilitado = false;
  hoje = new Date();
  preco = 199.9;

  mostrarMensagem() {
    alert('Botão clicado com sucesso!');
  }

  habilitarDesabilitarBotao() {
    this.botaoDesabilitado = !this.botaoDesabilitado;
  }
}
