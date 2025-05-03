/*
3 - Crie um script que simule o registro de informações de um aluno. O script deve ter três variáveis:

var nomeAluno;
let curso;
const matricula;

As variáveis nomeAluno e matricula devem estar em um escopo global. 
A variável curso deve estar dentro de uma função. 
A função deve retornar uma string que concatene todas as informações do aluno em uma única linha utilizando template literals ${var}.
*/

var nomeAluno = "Josemo";
const matricula = "123654-7";

const exibeDadosAluno = (nomeAluno, matricula) => {
    let curso = "Ciências da Computação";
    console.log(`O nome do aluno é: ${nomeAluno}, está cursando: ${curso}, sua matrícula é: ${matricula}`);
}

exibeDadosAluno(nomeAluno, matricula);