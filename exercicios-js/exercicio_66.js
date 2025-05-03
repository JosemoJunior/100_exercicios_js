/*
66 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "C".
*/

const frutas = ["Abacate", "Abacaxi", "Maçã", "Açaí","Ameixa", "Melão", "Cajú"];

const iniciadoComC = (a) => {
    return console.log(a.filter(p => p.startsWith("C")));
}

iniciadoComC(frutas);