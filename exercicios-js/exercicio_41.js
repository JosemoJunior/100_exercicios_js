/*
41 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a primeira letra em maiúscula. Utilize a função toUpperCase() para converter a primeira letra.
*/

const palavras = ["josemo", "júnior"];

const converteMaiusculo = (a) => {
    return console.log(a.map(l => l.charAt(0).toUpperCase()+ l.slice(1)));
}

converteMaiusculo(palavras);