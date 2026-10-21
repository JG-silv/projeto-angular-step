# Projeto Angular STEP

Repositório de estudos práticos de Angular. Cada aula acrescenta conceitos ao
workspace [minha-aplicacao-angular](./minha-aplicacao-angular/), feito com
componentes standalone do Angular.

Até a Aula 3, a aplicação apresenta diretivas e listas, ligação entre os dados e
a interface, formulários e pipes para formatar valores. O exercício do painel
administrativo também demonstra como combinar uma lista tipada com pipes.

## Executar o projeto

Requisitos: Node.js compatível com a versão atual do Angular CLI e npm.

No PowerShell, entre na pasta da aplicação, instale as dependências e inicie o
servidor de desenvolvimento:

```powershell
cd .\minha-aplicacao-angular
npm install
npm start
```

Abra <http://localhost:4200/>. O servidor recompila a aplicação quando os
arquivos são alterados.

Comandos úteis, executados dentro de `minha-aplicacao-angular`:

| Comando | O que faz |
| --- | --- |
| `npm start` | Inicia o servidor local (`ng serve`). |
| `npm run build` | Compila a aplicação para distribuição. |
| `npm test -- --watch=false` | Executa os testes uma vez. |

## Como a aplicação Angular funciona

O Angular inicia no `src/main.ts`. Esse arquivo chama
`bootstrapApplication(App, appConfig)`, que monta o componente raiz `App` na
página. O `App` escolhe os componentes que pode usar e seu template inclui os
elementos que compõem a tela.

```text
index.html
    │ contém o ponto de montagem <app-root>
    ▼
src/main.ts
    │ bootstrapApplication(App, appConfig)
    ▼
App (src/app/app.ts)
    │ importa os componentes usados na tela
    ├── template: src/app/app.html
    ├── <app-aula3> ──► aula3.ts + aula3.html + aula3.css
    └── <app-painel-adm> ──► painel-adm.ts + painel-adm.html + painel-adm.css
```

Um **componente** é uma parte reutilizável da interface. Neste projeto, cada
componente liga três responsabilidades:

- `*.ts`: estado e comportamento escrito em TypeScript;
- `*.html`: estrutura e expressões do template Angular;
- `*.css`: apresentação visual do componente.

O componente raiz importa os componentes standalone que aparecem em seu
template. Essa ligação explícita permite ao Angular verificar os elementos e
diretivas usados na página.

## Conteúdo estudado

### Aula 1 — Fundamentos e componentes

Angular é um framework para construir interfaces web. A aplicação é organizada
em componentes: um componente pode conter outros componentes, formando uma
hierarquia.

```text
App (componente raiz)
    ├── Exemplo
    └── PainelAdm
```

Um componente standalone reúne classe, template, estilos e os imports de que
precisa. A propriedade `selector` define a etiqueta usada para incluí-lo, por
exemplo `<app-painel-adm />`.

### Aula 2 — Diretivas e listas

As estruturas de controle do template decidem o que renderizar:

- `@if` / `@else`: mostra conteúdo conforme uma condição;
- `@for`: cria elementos para cada item de uma coleção; `track` identifica cada
  item e `@empty` define o caso de lista vazia;
- `@switch` / `@case` / `@default`: escolhe um bloco conforme um valor.

```html
@if (estaLogado) {
  <p>Logado</p>
} @else {
  <p>Não logado</p>
}

@for (produto of produtos; track produto.id) {
  <li>{{ produto.nome }}</li>
} @empty {
  <li>Nenhum produto disponível</li>
}
```

Uma diretiva de atributo como `[ngClass]` altera uma característica do elemento
sem controlar se ele existe na tela:

```html
<p [ngClass]="{ logado: estaLogado }">Classe dinâmica</p>
```

### Aula 3 — Data Binding e Pipes

Data Binding conecta o estado do componente ao template ou conecta uma ação do
usuário a um método. A direção da seta ajuda a entender cada forma:

```text
Interpolação:       componente ──► template
                    {{ nome }}

Property Binding:   componente ──► propriedade HTML
                    [disabled]="botaoDesabilitado"

Event Binding:      evento do template ──► método do componente
                    (click)="habilitarDesabilitarBotao()"

Two-Way Binding:    componente ◄────► campo de formulário
                    [(ngModel)]="nome"
```

Exemplo completo desta aplicação:

```html
<h2>{{ nome | uppercase }}</h2>
<input [(ngModel)]="nome" />
<button (click)="habilitarDesabilitarBotao()">Alternar botão</button>
<button (click)="mostrarMensagem()" [disabled]="botaoDesabilitado">
  Exibir mensagem
</button>
```

O `FormsModule` habilita `[(ngModel)]`. Ao digitar no campo, o valor de `nome`
no componente muda; ao mudar a propriedade, o template também se atualiza.
`(click)` chama um método e `[disabled]` envia o valor do componente para a
propriedade nativa do botão.

**Pipes** formatam valores durante a exibição, sem precisar alterar o dado
original no componente. O símbolo `|` encaminha o valor ao pipe:

```html
{{ nome | uppercase }}
{{ hoje | date: 'dd/MM/yyyy' : '' : 'pt-BR' }}
{{ preco | currency: 'BRL' : 'symbol' : '1.2-2' : 'pt-BR' }}
```

Neste projeto, o painel administrativo usa uma interface TypeScript para
descrever cada usuário e exibe o nome em maiúsculas e o salário em reais:

```text
Usuario { id, nome, email, salario }
       │
       ▼
@for (usuario of usuarios; track usuario.id)
       ├── usuario.nome    ──► uppercase ──► texto na tela
       └── usuario.salario ──► currency  ──► valor em BRL
```

### O que acontece quando o usuário interage?

```text
Pessoa digita no input
       │
       ▼
[(ngModel)] atualiza `nome`
       │
       ├──► interpolação mostra "Nome digitado: ..."
       └──► pipe uppercase atualiza o título

Pessoa clica no botão
       │
       ▼
(click) chama o método no componente
       │
       ▼
`botaoDesabilitado` muda
       │
       ▼
[disabled] atualiza o botão na tela
```

O Angular coordena essa atualização: a classe mantém os dados e a lógica, e o
template declara como apresentar o estado. Não é necessário procurar e alterar
manualmente cada elemento HTML.

## Estrutura relevante

```text
projeto-angular-step/
├── README.md
└── minha-aplicacao-angular/
    ├── package.json
    └── src/
        ├── main.ts
        └── app/
            ├── app.ts                 # componente raiz e imports
            ├── app.html               # template principal
            ├── aula2/                 # @if, @for, @switch e ngClass
            ├── aula3/                 # binding, ngModel e pipes
            └── painel-adm/             # lista de usuários e salários
```

## Branches das aulas

Use uma branch por aula para manter o histórico organizado. Confira a branch
atual com `git branch --show-current`. Para criar uma branch baseada na aula
anterior, estando na branch anterior:

```powershell
git fetch
git switch -c aula3-binding-pipes
```

Depois de conferir as alterações, elas podem ser salvas e enviadas ao remoto:

```powershell
git add .
git commit -m "aula 3 data binding e pipes"
git push -u origin aula3-binding-pipes
```

Se a branch já existir no remoto, primeiro atualize as referências com `git
fetch` e use `git switch aula3-binding-pipes` para mudar para ela.

## Testes e build

Os testes exercitam a renderização dos componentes, a atualização do nome
digitado, a alternância do estado do botão e a exibição dos usuários. Execute:

```powershell
npm test -- --watch=false
npm run build
```
