/*
36 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 5.
*/
const numeros = Array.from({ length: 100 }, (_, index) => index + 1); 

const imprimeMutiplosDeCinco = (a) => {
    let mutiplosDeCinco = a.filter(n => n % 5 === 0);
    return console.log(mutiplosDeCinco);
}

imprimeMutiplosDeCinco(numeros);