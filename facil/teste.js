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

var indice0;
var indice1;

indice0 = 1
indice1 = 1
console.log(indice0)
console.log(indice1)

//var isBomba = (tabuleiro[indice0][indice1] == -1)

while (indice1 < 10) {

    qntBombas = 0;

    if (tabuleiro[indice0][indice1] == -1) {
        console.log(indice1 + 'era bomba')
        
    } else {
    
        for (let i = indice0 - 1; i < indice0 + 2; indice0++) {
            for (let j = indice1 - 1; j < indice1+2; indice1++) {
                if (tabuleiro[i][j] == 0) {

                } else if (tabuleiro[i][j] == -1) {
                    qntBombas++;
                    console.log('qnt bombas1 ' + qntBombas)
                }
            }
        }


        // if (tabuleiro[indice0 - 1][indice1 - 1] == 0) {

        // } else if (tabuleiro[indice0 - 1][indice1 - 1] == -1) {
        //     qntBombas++;
        //     console.log('qnt bombas1 ' + qntBombas)
        // }
        // if (tabuleiro[indice0 - 1][indice1] === 0) {

        // } else if (tabuleiro[indice0 - 1][indice1] === -1) {
        //     qntBombas++;
        //     console.log('qnt bombas2 ' + qntBombas)
        // }
        // if (tabuleiro[indice0 - 1][indice1 + 1] === 0) {

        // } else if (tabuleiro[indice0 - 1][indice1 + 1] === -1) {
        //     qntBombas++;
        //     console.log('qnt bombas3 ' + qntBombas)
        // }
        // if (tabuleiro[indice0][indice1 - 1] === 0) {

        // } else if (tabuleiro[indice0][indice1 - 1] === -1) {
        //     qntBombas++;
        //     console.log('qnt bombas4 ' + qntBombas)
        // }
        // if (tabuleiro[indice0][indice1 + 1] === 0) {

        // } else if (tabuleiro[indice0][indice1 + 1] === -1) {
        //     qntBombas++;
        //     console.log('qnt bombas5 ' + qntBombas)
        // }
        // if (tabuleiro[indice0 + 1][indice1 - 1] === 0) {

        // } else if (tabuleiro[indice0 + 1][indice1 - 1] === -1) {
        //     qntBombas++;
        //     console.log('qnt bombas6 ' + qntBombas)
        // }
        // if (tabuleiro[indice0 + 1][indice1] === 0) {

        // } else if (tabuleiro[indice0 + 1][indice1] === -1) {
        //     qntBombas++;
        //     console.log('qnt bombas7 ' + qntBombas)
        // }
        // if (tabuleiro[indice0 + 1][indice1 + 1] === 0) {

        // } else if (tabuleiro[indice0 + 1][indice1 + 1] === -1) {
        //     qntBombas++;
        //     console.log('qnt bombas8 ' + qntBombas)
        // }


        console.log(`indice1 ${indice1}`)
        tabuleiro[indice0][indice1] = qntBombas;
        qntBombas = 0
        console.log('qnt bombas total ' + tabuleiro[indice0][indice1])
    }
    
    indice1++;

    console.log('\n')
}

matriz = '';

for (let i = 0; i < tabuleiro.length; i++) {
    for (let j = 0; j < tabuleiro[i].length; j++) {
        matriz += `${tabuleiro[i][j]} | `

    }
    matriz += `\n `;
}
console.log(matriz)