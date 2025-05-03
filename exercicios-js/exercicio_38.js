/*
38 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que terminam com a letra "a".
*/

const frutas = ["Laranja", "Banana", "Maçã", "Açaí"];

const terminadasComA = (a) => {
    return console.log(a.filter(p => p.endsWith('a')));
}

terminadasComA(frutas);