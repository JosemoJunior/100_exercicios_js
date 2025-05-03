/*
58 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "o".
*/

const frutas = ["Abacate", "Abacaxi", "Maçã", "Açaí","Ameixa", "Melão"];

const contemO = (a) => {
    return console.log(a.filter(p => p.includes("o")));
}

contemO(frutas);