/*
1 - Crie um script que tenha três variáveis:

var nome;
let sobreNome;
const cpf;

OBS: nome e cpf devem estar em um escopo global, sobreNome deve estar dentro de uma função. 
A execução do programa deve imprimir o nome completo na ordem correta (com quebra de linha): 
Nome Sobrenome CPF. Outra linha com uma mensagem concatenando os valores. */

var nome = "Josemo";
const cpf = "123.123.123-12";

const imprimiNomeCompleto = (nome, cpf) => {
    let sobreNome = "Martins";
    console.log(`Nome: ${nome + " " + sobreNome} \n CPF:${cpf}`);
    console.log(`O nome completo é: ${nome + " " + sobreNome}, e o CPF:${cpf}`)
}

imprimiNomeCompleto(nome, cpf);
