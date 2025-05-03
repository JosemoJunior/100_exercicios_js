/*
18 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne o maior número do array. 
Utilize a função Math.max() para encontrar o maior número.
*/

numeros = [5, 14, 17, 25, 52];

const encontraMaiorNumero = (ar) => {
    let maior = Math.max(...ar);
    console.log(`O maior número é: ${maior}`);
}

encontraMaiorNumero(numeros);

  
