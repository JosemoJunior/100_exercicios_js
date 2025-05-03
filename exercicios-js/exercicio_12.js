/*
12 - Crie um script que declare uma variável let altura e atribua a ela um valor numérico. Em seguida, declare uma função que calcule a altura ao quadrado e imprima o resultado.
*/
var altura = 5.00;

const calculaAreaQuadrado = (h) => {
    let areaQuadrado = h * h;
    return console.log(`A área do quadrado é: ${areaQuadrado}`);
}

calculaAreaQuadrado(altura);
