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
  document.getElementById(ident).style.background = "white"
  console.log(ident)

  //só gerar bombas no primeiro clique
  if (PRIMEIROCLIQUE) {
    gerarBombas()
    mapearBombas()
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

var qntBombas = 0;


//gerar números próx bomba
function mapearBombas() {
  var indice0;
  var indice1;
  
  indice0 = 0
  while(indice0<linhas) {

    //vai em cada coluna
    indice1 = 0
    while (indice1 < colunas) {

      qntBombas = 0;

      //ve se já é uma bomba, para não alterar seu valor
      if(tabuleiro[indice0][indice1] == -1) {
        indice1++;

      } else {
        //vai girando ao redor de cada 'quadrado'
        
        //vê se é a primeira linha pra não dar erro
        if (indice0 == 0) {
          if (tabuleiro[indice0][indice1 - 1] === -1) {
            qntBombas++;
          }
          if (tabuleiro[indice0][indice1 + 1] === -1) {
            qntBombas++;
          }
          if (tabuleiro[indice0 + 1][indice1 - 1] === -1) {
            qntBombas++;
          }
          if (tabuleiro[indice0 + 1][indice1] === -1) {
            qntBombas++;
          }
          if (tabuleiro[indice0 + 1][indice1 + 1] === -1) {
            qntBombas++;
          }

        //vê se é a última linha pra não dar erro
        } else if (indice0 == 7) {
            if (tabuleiro[indice0 - 1][indice1 - 1] == -1) {
              qntBombas++;
            }
            if (tabuleiro[indice0 - 1][indice1] === -1) {
              qntBombas++;
            }
            if (tabuleiro[indice0 - 1][indice1 + 1] === -1) {
              qntBombas++;
            }
            if (tabuleiro[indice0][indice1 - 1] === -1) {
              qntBombas++;
            }
            if (tabuleiro[indice0][indice1 + 1] === -1) {
                qntBombas++;
            }
        } else {
            if (tabuleiro[indice0 - 1][indice1 - 1] == -1) {
                qntBombas++;
            }
            if (tabuleiro[indice0 - 1][indice1] === -1) {
                qntBombas++;
            }
            if (tabuleiro[indice0 - 1][indice1 + 1] === -1) {
                qntBombas++;
            }
            if (tabuleiro[indice0][indice1 - 1] === -1) {
                qntBombas++;
            }
            if (tabuleiro[indice0][indice1 + 1] === -1) {
                qntBombas++;
            }
            if (tabuleiro[indice0 + 1][indice1 - 1] === -1) {
                qntBombas++;
            }
            if (tabuleiro[indice0 + 1][indice1] === -1) {
                qntBombas++;
            }
            if (tabuleiro[indice0 + 1][indice1 + 1] === -1) {
                qntBombas++;
            }
      }
      
      tabuleiro[indice0][indice1] = qntBombas;
      qntBombas = 0
      indice1++;
    }

  }
  indice0++;
  }
  console.log(tabuleiro)
     
  

}