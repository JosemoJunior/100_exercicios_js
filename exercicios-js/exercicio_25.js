/*
25 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja em letras maiúsculas. 
Utilize a função toUpperCase() para converter as strings.
*/

const palavras = ["josemo", "júnior"];

const converteMaiusculo = (a) => {
    return console.log(a.map(l => l.toUpperCase()));
}

converteMaiusculo(palavras);


