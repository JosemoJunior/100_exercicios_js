/*
7 - Crie um script que combine o uso de objetos literais, arrays e cálculos simples para armazenar e manipular informações pessoais e acadêmicas de uma pessoa. O script deve realizar as seguintes tarefas:

nome: O nome do aluno.
cpf: O CPF do aluno.
cidade: A cidade onde o aluno mora.
notas: Um array com 4 notas do aluno. 

Imprima o nome, CPF e cidade do aluno. 
Imprima cada uma das notas do array notas. 
Calcule a média das notas do aluno e imprima. 
Selecione uma das notas aleatoriamente, convertê-la de uma escala de 0-10 para uma escala de 0-100 (nota convertida = nota × 10). 
Utilize a sintaxe notas[Math.floor(Math.random() * notas.length)] para selecionar uma nota aleatória do array. Utilize template literals para a concatenação de strings.
*/

const aluno = {
    nome: "Josemo",
    cpf: "123.123-12",
    cidade: "João Pessoa",
    notas: [9.00, 8.00, 7.5, 8.5]
};

const calculaMedia = (objeto) => {
    let soma = 0;
    for (let i = 0; i < objeto.notas.length; i++) {
        soma += objeto.notas[i];
    }
    let media = soma / objeto.notas.length;
    return media;
};

const imprimiTudo = (objeto) => {
    console.log(`Nome: ${objeto.nome}, CPF: ${objeto.cpf}, cidade: ${objeto.cidade}`);
    console.log(`O aluno teve as notas: ${objeto.notas[0]}, ${objeto.notas[1]}, ${objeto.notas[2]}, ${objeto.notas[3]}`);
    let media = calculaMedia(objeto);
    console.log(`O aluno teve a média: ${media}`);
    let indiceNota = [Math.floor(Math.random() * objeto.notas.length)];
    let notaconvertida = objeto.notas[indiceNota] * 10;
    console.log(`A nota escolhida foi: ${objeto.notas[indiceNota]} e convertida: ${notaconvertida}`);
};

imprimiTudo(aluno);
