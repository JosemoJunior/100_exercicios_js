/*
34 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades nome, idade e notas (um array de números). Utilize a função reduce() para calcular a média das idades dos alunos.

Imprima o resultado.
*/

const alunos = [
    { nome: "Josemo", idade: 35, notas: [8.00, 8.55, 9.20] },
    { nome: "João", idade: 34, notas: [7.50, 9.20, 7.67] }
  ]
  
const imprimiMediaIdades = (a) => {
    let somaIdades = 0;
    for (let i = 0; i < a.length; i++) {
        somaIdades += (a[i].idade);
      }
    let mediaIdades = somaIdades / a.length;
    return console.log(`A media das idades é: ${mediaIdades}`);
}

imprimiMediaIdades(alunos);