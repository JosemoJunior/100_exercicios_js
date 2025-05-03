/*
20 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne a média dos números do array.
*/

numeros = [5, 14, 17, 25, 52];

const calculaMedia = () => {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    let media = soma / numeros.length;
    return console.log(`A media dos números é: ${media}`);
}

calculaMedia(numeros);

