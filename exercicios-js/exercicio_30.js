/*
30 - Crie um script que declare um objeto chamado carro com as propriedades modelo, ano e cor. 
Inicialize o objeto com valores e imprima todas as propriedades usando console.log.
*/

const carro = {
    modelo: "celta",
    ano: "2001",
    cor: "vermelho"
}

const imprimeTudo = (a) => {
    console.log(`Modelo: ${a.modelo}, ano: ${a.ano}, cor: ${a.cor}`);
}

imprimeTudo(carro);