/*
31 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades nome, idade e notas (um array de números). Utilize um loop for para imprimir o nome de cada aluno.
*/

const alunos = [
    { nome: "Josemo", idade: 35, notas: [8.00, 8.55, 9.20] },
    { nome: "João", idade: 34, notas: [7.50, 9.20, 7.67] }
  ]
  
const imprimiAlunos = (a) => {
    for (let i = 0; i < a.length; i++) {
        console.log(a[i].nome)
      }
}

imprimiAlunos(alunos);

