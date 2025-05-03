/*
17 - Crie um script que declare um objeto chamado livro com as propriedades titulo, autor e anoPublicacao. Inicialize o objeto com valores e imprima todas as propriedades usando console.log.
*/

const livro = {
    titulo: "Senhor dos Anéis",
    autor: "J. R. R. Tolkien",
    anoPublicacao: "29 de julho de 1954"
}

const imprimeTudo = (a) => {
    console.log(`Titulo: ${a.titulo}, autor: ${a.autor}, publicado em: ${a.anoPublicacao}`);
}

imprimeTudo(livro);
