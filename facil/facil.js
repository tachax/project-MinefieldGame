var tabuleiro = [];
var linhas;
var colunas;
var bombas;
let i;
let j;
bombas = 10;
linhas = 8;
colunas = 10;
var PRIMEIROCLIQUE = true;

//inserindo a tabela
function montarTabuleiro() {

  //inserindo a qnt de linhas e colunas
  for (i = 0; i < linhas; i++) {
    //linha
    tabuleiro[tabuleiro.length] = [];
    document.getElementById('tabela').innerHTML += `<tr id="${i}"></tr>`;
    for (j = 0; j < colunas; j++) {
      //coluna c/ os números
      tabuleiro[i][j] = 0;
      document.getElementById(i).innerHTML += `<td><button onclick="trocarMatriz('${String(i)}${String(j)}')" id="${String(i)}${String(j)}"></button></td>`;
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
    location.href = '../facil/facill.html'
  } else if (niveis == 'intermed') {
    location.href = '../intermediario/intermediario.html'
  } else if (niveis == 'dificil') {
    location.href = '../dificil/dificil.html'
  }
}

//trocar matriz(add bombas nela) e mudar cor do botão
function trocarMatriz(ident) {
  document.getElementById(ident).style.background = "red"
  console.log(ident)

  //só gerar bombas no primeiro clique
  if (PRIMEIROCLIQUE) {
    gerarBombas()
    proxBomba(ident)
    PRIMEIROCLIQUE = false;
  }

}

//gerar bombas
function gerarBombas() {

  for (var i = 0; i < bombas; i++) {
    var numLinha = Math.floor((Math.random() * linhas));
    var numColuna = Math.floor((Math.random() * colunas));

    while (tabuleiro[numLinha][numColuna] === -1) {
      numLinha = Math.floor((Math.random() * linhas));
      numColuna = Math.floor((Math.random() * colunas));
    }

    tabuleiro[numLinha][numColuna] = -1;
  }
  console.log(tabuleiro)
}

//gerar números próx bomba
function proxBomba(ident) {
  var qntBombas;

  i = Number(ident[0]) //2
  console.log(i)
  j = Number(ident[1]) //3
  console.log(j)
  for (let l = i - 1; l < i + 2; l++) {
    console.log(tabuleiro)
    console.log('l '+l)
    for (let c = j - 1; c < j + 2; c++) {
      console.log(tabuleiro)
      console.log('c '+c)
      qntBombas = 0;

      if (tabuleiro[l][c] === tabuleiro[i][j]) {
        
      } else if (tabuleiro[l][c] === -1) {
        qntBombas++;
      }

      console.log(qntBombas)
      tabuleiro[i][j] = qntBombas;
      console.log('tabu ' + tabuleiro[i][j])
      console.log(tabuleiro)

    }

  }
  console.log(tabuleiro)

  // for (i = 0; i < linhas; i++) {
  //   console.log('i '+i)
  //   for (j = 2; j < colunas; j++) {
  //     console.log('j '+j)

  //     if (tabuleiro[i][j + 1] == -1) {
  //       qntBombas++;
  //     } else if (tabuleiro[i][j - 1] == -1) {
  //       qntBombas++;
  //     } else if (tabuleiro[i - 1][j] == -1) {
  //       qntBombas++;
  //     } else if (tabuleiro[i - 1][j + 1] == -1) {
  //       qntBombas++;
  //     } else if (tabuleiro[i - 1][j - 1] == -1) {
  //       qntBombas++;
  //     } else if (tabuleiro[i + 1][j] == -1) {
  //       qntBombas++;
  //     } else if (tabuleiro[i + 1][j + 1] == -1) {
  //       qntBombas++;
  //     } else if (tabuleiro[i + 1][j - 1] == -1) {
  //       qntBombas++;
  //     }

  //     tabuleiro[i][j] = qntBombas;
  //     qntBombas = 0;
  //     console.log('tabu '+tabuleiro[i][j])

  //   }

  // }
  // console.log(tabuleiro)
}

