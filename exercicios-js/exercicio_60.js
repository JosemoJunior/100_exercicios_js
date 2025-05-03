/*
60 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são divisíveis por 7.
*/

const numeros = Array.from({ length: 100 }, (_, index) => index + 1); 

console.log(numeros.filter(n => n % 7 === 0));