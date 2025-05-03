/*
16 - Crie um script que declare um array de números e utilize um loop while para calcular a soma de todos os números do array. Imprima o resultado.
*/

var indice = Math.floor(Math.random() * 10);
console.log("Quantidade de números:", indice);

var numeros = [];
var soma = 0;

const gerarNumeros = (i) => {
    for (let j = 0; j < i; j++) {
        let n = Math.floor(Math.random() * 10);
        numeros.push(n);
    }
}

const somaNumeros = (a) => {
    soma = 0;
    let i = 0;
    while (i < a.length) {
        soma += a[i];
        i++;
    }
}

const imprimeTudo = (a) => {
    console.log("Os números são:");
    for (let n of a) {
        console.log(n);
    }
    somaNumeros(a);
    console.log(`A soma dos números é: ${soma}`);
}

gerarNumeros(indice);
imprimeTudo(numeros);

