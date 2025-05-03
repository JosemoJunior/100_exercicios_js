/*
37 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja invertida. Utilize a função reverse() para inverter as strings.
*/

const frutas = ["Abacate", "Abacaxi", "Maçã", "Açaí"];

const invertePalavras = (a) => {
    return console.log(a.map(p => p.split('').reverse().join('')));
}

invertePalavras(frutas);
