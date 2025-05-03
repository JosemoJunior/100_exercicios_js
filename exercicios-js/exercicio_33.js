/*
33 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades nome, idade e notas (um array de números). Utilize a função filter() para criar um novo array contendo apenas os alunos com idade maior ou igual a 18 anos. Imprima o novo array.
*/

const alunos = [
    { nome: "Josemo", idade: 35, notas: [8.00, 8.55, 9.20] },
    { nome: "João", idade: 17, notas: [7.50, 9.20, 7.67] }
  ]
  

const maiorIdade = alunos.filter(aluno => aluno.idade >= 18)
console.log(maiorIdade);

