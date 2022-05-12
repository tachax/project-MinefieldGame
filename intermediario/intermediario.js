var tabuleiro = [];
const linhas = 14;
const colunas = 18;
const bombas = 40;
let i;
let j;
var PRIMEIROCLIQUE = true;
var indI;

//inserindo a tabela
function montarTabuleiro() {

  //inserindo a qnt de linhas e colunas
  for (i = 0; i < linhas; i++) {
    //linha
    tabuleiro[tabuleiro.length] = [];
    document.getElementById('tabela').innerHTML += `<tr id="linha${i}"></tr>`;

    for (j = 0; j < colunas; j++) {
      //coluna c/ os números
      tabuleiro[i][j] = 0;
      document.getElementById(`linha${i}`).innerHTML += `<td><button onclick="jogada('${String(i)}l${String(j)}c')" id="${String(i)}l${String(j)}c"></button></td>`;
    }
  }

  //trocar display das divs
  document.getElementById('preparado').style.display = 'none';
  document.getElementById('jogo').style.display = 'flex';
  console.log(tabuleiro)
}


//trocar de nivel
function trocarNiveis() {
  var niveis;
  niveis = document.getElementById('niveis').value

  if (niveis == 'facil') {
    location.href = '../facil/facil.html'
  } else if (niveis == 'intermed') {
    location.href = '../intermediario/intermediario.html'
  } else if (niveis == 'dificil') {
    location.href = '../dificil/dificil.html'
  }
}

//trocar matriz(add bombas nela) e mudar cor do botão
function jogada(ident) {
  document.getElementById(ident).style.background = "white"
  console.log(ident)

  //só gerar bombas no primeiro clique
  if (PRIMEIROCLIQUE) {
    gerarBombas(ident)
    mapearBombas()
    PRIMEIROCLIQUE = false;
  }

  ehNumero(ident, identLin, identCol)

}

var identLin = '';
var identCol = '';

//gerar bombas
function gerarBombas(ident) {

  //arrumar o id da linha/coluna
  for(let i=0; i < ident.length; i++) {
    if (ident[i] == 'l') {
      for (let j=0; j<i; j++) {
        identLin += ident[j]
      }
    } else if (ident[i] == 'c') {
      for (let j=i-1; j>identLin.length; j--) {
        identCol += ident[j]
      }
    }
  }

  identLin = Number(identLin)
  identCol = Number(identCol)

  console.log(identLin)
  console.log(identCol)

  for (var i = 0; i < bombas; i++) {
      var numLinha = Math.floor((Math.random() * linhas));
      var numColuna = Math.floor((Math.random() * colunas));

      //confere se já é uma bomba ou o número clicado
      while (tabuleiro[numLinha][numColuna] === -1 || (numLinha == identLin && numColuna == identCol)) {
        numLinha = Math.floor((Math.random() * linhas));
        numColuna = Math.floor((Math.random() * colunas));
      }

      tabuleiro[numLinha][numColuna] = -1;
    }
  console.log(tabuleiro)
}

//gerar números próx bomba
function mapearBombas() {
  var qntBombas = 0;
  var indice0;
  var indice1;

  indice0 = 0
  while (indice0 < linhas) {

    //vai em cada coluna
    indice1 = 0
    while (indice1 < colunas) {
      qntBombas = 0;

      //ve se já é uma bomba, para não alterar seu valor
      if (tabuleiro[indice0][indice1] == -1) {
        indice1++;

      } else {
        //vai girando ao redor de cada 'quadrado'
        verificarAoRedor(indice0, indice1, qntBombas)

        indice1++;
      }

    }
    indice0++;
  }
}

//verifica as bombas ao redor
function verificarAoRedor(indice0, indice1, qntBombas) {
  //vê se é a primeira linha pra não dar erro
  if (indice0 == 0) {
    for (let i = indice0; i < indice0 + 2; i++) {
      for (let j = indice1 - 1; j < indice1 + 2; j++) {
        if (tabuleiro[i][j] === -1) {
          qntBombas++
        }
      }
    }

    //vê se é a última linha pra não dar erro
  } else if (indice0 == tabuleiro.length - 1) {
    for (let i = indice0 - 1; i < indice0 + 1; i++) {
      for (let j = indice1 - 1; j < indice1 + 2; j++) {
        if (tabuleiro[i][j] === -1) {
          qntBombas++
        }
      }
    }

    //linhas de 1 a 6
  } else {
    for (let i = indice0 - 1; i < indice0 + 2; i++) {
      for (let j = indice1 - 1; j < indice1 + 2; j++) {
        if (tabuleiro[i][j] === -1) {
          qntBombas++
        }
      }
    }
  }
  tabuleiro[indice0][indice1] = qntBombas;
}

function ehNumero(ident, identLin, identCol) {
  if (tabuleiro[identLin][identCol] != -1 || tabuleiro[identLin][identCol] != 0) {
    document.getElementById(ident).innerText = tabuleiro[identLin][identCol];
  }

  if (tabuleiro[identLin][identCol] == -1) {
    location.href = '../loser/loser.html'
  }

}