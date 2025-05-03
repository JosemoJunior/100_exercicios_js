/*
67 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 5.
*/

const numeros = Array.from({ length: 100 }, (_, index) => index + 1); 

const multiplicaPor5 = (a) => {
    let incrementado = a.map(n => n * 5);
    return console.log(incrementado);
}

multiplicaPor5(numeros);