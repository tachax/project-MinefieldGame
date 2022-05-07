var tabuleiro = [];
var linhas;
var colunas;
var bombas;
let i;
let j;
bombas = 10;
linhas = 8;
colunas = 10;
const TERM = false;

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
      document.getElementById(i).innerHTML += `<td><button onclick="trocarTabuleiro()" id="${i}${j}"></button></td>`;
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

//trocar tabuleiro
function trocarTabuleiro() {
  document.getElementById(`${i}${j}`).style.backgroundColor = 'red'
  gerarBombas()
}

//gerar bombas
function gerarBombas() {
  
  for (var i = 0; i < bombas; i++) {
    var linha = Math.floor((Math.random() * linhas));
    var coluna = Math.floor((Math.random() * colunas));
    
    while (tabuleiro[linha][coluna] === -1) {
      var linha = Math.floor((Math.random() * linhas));
      var coluna = Math.floor((Math.random() * colunas));      
    }
    
    tabuleiro[linha][coluna] = -1;
  }
  
  console.log(tabuleiro)
}

/*
//sorteando as casas da armadilha
    for (i = 0; i < 10; i++) {
        armadilha = Math.floor(Math.random() * 30);

        //verifica se a armadilha sorteada já é uma armadilha
        while (tabuleiro[armadilha] == -1) {
            armadilha = Math.floor(Math.random() * 30);
        }

        tabuleiro[armadilha] = -1;
    }

    //preenchendo as casas restantes do tabuleiro
    for (let i = 0; i < 30; i++) {
        if (tabuleiro[i] != -1) {
            tabuleiro[i] = 0;
        }
        document.getElementById("linha").innerHTML += `<td rowspan="2" id="${id}">${tabuleiro[i]}</td>`;
        id++;
    }
*/