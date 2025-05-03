/*
6 - Crie um script que contenha um objeto literal chamado pessoa. O objeto deve armazenar informações sobre uma pessoa, incluindo:

nome: O nome da pessoa.
cpf: O CPF da pessoa.
cidade: A cidade onde a pessoa mora. Declare e inicialize o objeto pessoa com valores para nome, cpf e cidade. 

Imprima cada uma das propriedades do objeto pessoa usando console.log.
*/
const pessoa = {
    nome: "Josemo",
    cpf: "123.123-12",
    cidade: "João Pessoa"
}

const imprimiTudo = () => {
    console.log(`Nome: ${pessoa.nome}, CPF: ${pessoa.cpf}, cidade: ${pessoa.cidade}`)
}

imprimiTudo();