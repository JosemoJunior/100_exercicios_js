/*
53 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha as vogais removidas. Utilize a função replace() para remover as vogais.
*/

  
const frutas = ["Abacate", "Abacaxi", "Maçã", "Açaí", "Banana"];

const removerVogal = (a) => {
    let convertido = a.map(p => p.replace(/[aeiouAEIOU]/g, ''));
    return console.log(convertido);
}

removerVogal(frutas);