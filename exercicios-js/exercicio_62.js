/*
62 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm exatamente 6 caracteres.
*/

const frutas = ["Laranja", "Banana", "Maçã", "Açaí"];

const imprimeCom6Caracteres = (a) => {
    return console.log(a.filter(p => p.length === 6 ));
}

imprimeCom6Caracteres(frutas);