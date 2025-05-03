/*
61 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a primeira e a última letra em maiúscula. Utilize a função toUpperCase() para converter as letras.
*/

const frutas = ["Abacate", "Abacaxi", "Maçã", "Açaí","Ameixa", "Melão"];

const maiusculaPrimeiraEUltima = (a) => {
      return console.log(a.map(p => p.charAt(0).toUpperCase() + p.slice(1, -1) + p.slice(-1).toUpperCase()));
}
  
maiusculaPrimeiraEUltima(frutas);