/*
45 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja em letras maiúsculas e invertida.
*/
const frutas = ["Abacate", "Abacaxi", "Maçã", "Açaí"];

const invertePalavras = (a) => {
    let invertido = a.map(p => p.split('').reverse().join(''))
    return console.log(invertido.map(l => l.toUpperCase()));
}

invertePalavras(frutas);