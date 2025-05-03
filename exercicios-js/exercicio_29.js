/*
29 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "A".
*/

const frutas = ["Abacate", "Abacaxi", "Maçã", "Açaí"];

const iniciadasComA = (a) => {
    return console.log(a.filter(p => p.startsWith('A')));
}

iniciadasComA(frutas);