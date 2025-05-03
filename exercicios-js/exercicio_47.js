/*
47 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 10.
*/

const numeros = Array.from({ length: 100 }, (_, index) => index + 1); 

const multiplicaPorDez = (a) => {
    let multiplicado = a.map(n => n * 10);
    return console.log(multiplicado);
}

multiplicaPorDez(numeros);