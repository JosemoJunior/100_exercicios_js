/*
43 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 3.
*/

const numeros = Array.from({ length: 100 }, (_, index) => index + 1); 

const multiplicaPorTres = (a) => {
    let multiplicado = a.map(n => n * 3);
    return console.log(multiplicado);
}

multiplicaPorTres(numeros);