/*
70 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm mais de 7 caracteres.
*/
const frutas = ["Laranja", "Banana", "Maçã", "Açaí"];

const imprimeCom7Caracteres = (a) => {
    return console.log(a.filter(p => p.length === 7 ));
}

imprimeCom7Caracteres(frutas);