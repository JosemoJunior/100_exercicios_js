/*
8 - Faça um script que contenha um array chamado notas, esse array armazena 3 notas de um aluno. O programa deve imprimir:

A primeira nota do aluno é: …
A segunda nota do aluno é: …
A terceira nota do aluno é: …
A média do aluno é: …
O aluno está: APROVADO ou REPROVADO (APROVADO quando a média for maior ou igual a 7).
*/

var notas = [9.00, 8.00, 7.5, 8.5];

const calculaMedia = () => {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    let media = soma / notas.length;
    
    if (media >= 7.00) {
        return console.log(`O aluno foi aprovado, sua média foi ${media}`);
    }
    else {
        return console.log(`O aluno não foi aprovado, sua média foi ${media}`);
    }
};

calculaMedia();
