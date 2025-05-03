/*
49 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a última letra em maiúscula. Utilize a função toUpperCase() para converter a última letra.
*/

const frutas = ["Abacate", "Abacaxi", "Maçã", "Açaí"];

const ultimaPalavraMaiuscula = (a) => {
    let convertido = a.map(s => {
        const len = s.length
        return s.slice(0, len - 1) + s.charAt(len - 1).toUpperCase()
      })
    //return console.log(convertido);
}

ultimaPalavraMaiuscula(frutas);