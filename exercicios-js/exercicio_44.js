/*
44 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são divisíveis por 2.
*/

const numeros = Array.from({ length: 100 }, (_, index) => index + 1); 

const imprimeMutiplosDeDois = (a) => {
    let mutiplosDeDois = a.filter(n => n % 2 === 0);
    return console.log(mutiplosDeDois);
}

imprimeMutiplosDeDois(numeros);


