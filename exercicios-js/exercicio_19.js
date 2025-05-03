/*
19 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne o menor número do array. Utilize a função Math.min() para encontrar o menor número.
*/

numeros = [5, 14, 17, 25, 52];

const encontraMenorNumero = (ar) => {
    let menor = Math.min(...ar);
    console.log(`O menor número é: ${menor}`);
}

encontraMenorNumero(numeros);
