/*
13 - Crie um script que declare uma variável var largura e atribua a ela um valor numérico. Declare uma função que calcule a largura ao cubo e imprima o resultado.
*/

var largura = 5.00;

const areaDoCubo = (h) => {
    let areaCubo = Math.pow(h, 3)
    return console.log(`A area do cubo é: ${areaCubo}`);
}

areaDoCubo(largura);