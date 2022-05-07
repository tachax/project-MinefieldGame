var tabuleiro = [];
var linhas;
var colunas;
linhas = 8;
colunas = 10;

//inserindo a tabela
function montarTabuleiro() {
  
  //inserindo a qnt de linhas e colunas
  for (let i = 0; i < linhas; i++) {
    //linha
    tabuleiro[tabuleiro.length] = [];
    document.getElementById('tabela').innerHTML += `<tr id="${i}"></tr>`;
    for (let j = 0; j < colunas; j++) {
      //coluna c/ os números
      tabuleiro[i][j] = "";
      document.getElementById(i).innerHTML += `<td id="${i}${j}">${tabuleiro[i][j]}</td>`;
    }
  }

  //sumir botão
  document.getElementById('btMontar').style.display = 'none';
  document.getElementById('preparado').style.display = 'none';
  document.getElementById('jogo').style.display = 'flex';
}