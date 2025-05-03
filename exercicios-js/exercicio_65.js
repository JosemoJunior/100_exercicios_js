/*
65 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha as consoantes removidas. Utilize a função replace() para remover as consoantes.
*/


const frutas = ["Abacate", "Abacaxi", "Maçã", "Açaí", "Banana"];

const removerConsoante = (a) => {
    let convertido = a.map(p => p.replace(/[^aeiouAEIOU]/g, ''));
    return console.log(convertido);
}
  
removerConsoante(frutas);