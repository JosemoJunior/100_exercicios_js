/*
54 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "B".
*/

const frutas = ["Abacate", "Abacaxi", "Maçã", "Açaí", "Banana"];


const iniciadasComB = (a) => {
    return console.log(a.filter(p => p.startsWith('B')));
}

iniciadasComB(frutas);