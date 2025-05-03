/*
39 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja convertido para uma string com duas casas decimais. Utilize a função toFixed() para formatar os números.
*/

const numeros = [1.00, 3.00, 75.00];

const converteParaString = (a) => {
    let string = a.map(n => n.toFixed(2));
    return console.log(string);
  }

converteParaString(numeros);