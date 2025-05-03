/*
59 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja elevado ao cubo.
*/

const numeros = Array.from({ length: 100 }, (_, index) => index + 1); 

const elevaAoCubo = (a) => {
    let incrementado = a.map(n => n ** 3);
    return console.log(incrementado);
}

elevaAoCubo(numeros);