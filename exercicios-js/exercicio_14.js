/*
14 - Crie um script que declare uma variável const base e atribua a ela um valor numérico. 
Declare uma função que calcule a área de um triângulo usando a base e uma altura fornecida como parâmetro e imprima o resultado.
*/
var base = 10.00;

const areaDoTriangulo = (b, h) => {
    let areaTriangulo = (b * h) / 2;
    return console.log(`A area do Triangulo é: ${areaTriangulo}`);
}

areaDoTriangulo(base, 12.00);