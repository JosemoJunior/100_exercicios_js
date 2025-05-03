/*
55 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja dividido por 2.
*/

const numeros = Array.from({ length: 100 }, (_, index) => index + 1); 

const dividePorDois = (a) => {
    let dividido = a.map(n => n / 2);
    return console.log(dividido);
}

dividePorDois(numeros);