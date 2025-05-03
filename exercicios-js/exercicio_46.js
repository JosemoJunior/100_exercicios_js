/*
46 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "e".
*/

const frutas = ["Abacate", "Abacaxi", "Maçã", "Açaí","Ameixa"];

const contemE = (a) => {
    return console.log(a.filter(p => p.includes("e")));
}

contemE(frutas);