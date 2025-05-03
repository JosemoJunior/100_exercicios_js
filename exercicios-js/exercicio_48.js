/*
48 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são ímpares.
*/
const numeros = Array.from({ length: 100 }, (_, index) => index + 1); 

const imprimeImpares = (a) => {
    let impares = a.filter(n => n % 2 != 0);
    return console.log(impares);
}

imprimeImpares(numeros);