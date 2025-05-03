/*
35 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja decrementado em 1.
*/
const numeros = [1, 2, 3, 4, 5];

const decrementaUm = (a) => {
    let decrementado = a.map(n => n - 1);
    return console.log(decrementado);
}

decrementaUm(numeros);