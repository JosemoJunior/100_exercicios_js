/*
69 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a primeira e a última letra em minúscula. Utilize a função toLowerCase() para converter as letras.
*/

const frutas = ["ABACATE", "ABACAXI", "MAÇÃ"];

const maiusculaPrimeiraEUltima = (a) => {
      return console.log(a.map(p => p.charAt(0).toLowerCase() + p.slice(1, -1) + p.slice(-1).toLowerCase()));
}
  
maiusculaPrimeiraEUltima(frutas);