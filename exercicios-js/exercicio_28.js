/*
28 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 3.
*/

const numeros = Array.from({ length: 100 }, (_, index) => index + 1); 

const imprimeMutiplosDeTres = (a) => {
    let mutiplosDeTres = a.filter(n => n % 3 === 0);
    return console.log(mutiplosDeTres);
}

imprimeMutiplosDeTres(numeros);