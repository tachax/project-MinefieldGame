var tabuleiro = [
    [0, -1, -1, 0, 0, -1, -1, 0, 0, 0],
    [0, 0, 0, 0, -1, 0, -1, 0, 0, 1],
    [0, 0, 0, 0, -1, 0, 0, 0, -1, 0],
    [0, 0, 0, -1, -1, -1, -1, 0, -1, 0],
    [0, 0, 0, -1, -1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, -1, 0, -1, 0, 0, 0, 0],
    [0, 0, 0, 0, -1, 0, 0, -1, -1, 0]
];

var matriz;

for (let i = 0; i < tabuleiro.length; i++) {
    for (let j = 0; j < tabuleiro[i].length; j++) {
        matriz += `${tabuleiro[i][j]} | `

    }
    matriz += `\n `;
}
console.log(matriz)

const linhas = 8;
const colunas = 10;

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

            //vê se é a primeira linha pra não dar erro
            if (indice0 == 0) {

                for(let i= indice0; i < indice0 + 2; i++){
                    for(let j = indice1 -1; j < indice1 + 2; j++){
                        if(tabuleiro[i][j] === -1){
                            qntBombas++ 
                        }
                    }
                }

                //vê se é a última linha pra não dar erro
            } else if (indice0 == 7) {

                for(let i= indice0-1; i < indice0 + 1; i++){
                    for(let j = indice1 -1; j < indice1 + 2; j++){
                        if(tabuleiro[i][j] === -1){
                            qntBombas++ 
                        }
                    }
                }

            } else {

                for(let i= indice0-1; i < indice0 + 2; i++){
                    for(let j = indice1 -1; j < indice1 + 2; j++){
                        if(tabuleiro[i][j] === -1){
                            qntBombas++ 
                        }
                    }
                }

            }

            tabuleiro[indice0][indice1] = qntBombas;
            indice1++;
        }

    }
    indice0++;
}

matriz = '';

for (let i = 0; i < tabuleiro.length; i++) {
    for (let j = 0; j < tabuleiro[i].length; j++) {
        matriz += `${tabuleiro[i][j]} | `

    }
    matriz += `\n `;
}
console.log(matriz)