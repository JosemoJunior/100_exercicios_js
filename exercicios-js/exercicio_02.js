/*
2 - Crie um script que simule um sistema de registro de produtos. O script deve ter três variáveis:

var produto;
let categoria;
const codigoProduto;

As variáveis produto e codigoProduto devem estar em um escopo global. 
A variável categoria deve estar dentro de uma função. 
A execução do programa deve imprimir os detalhes do produto na ordem correta (com quebra de linha): Produto Categoria Código do Produto.
*/

var produto = "Nintendo Switch";
const codigoProduto = "012123-NS";

const exibeProduto = (produto, codigoProduto) => {
    let categoria = "Consoles e Jogos";
    console.log(`O produto é: ${produto}, da catégoria: ${categoria}, seu código é: ${codigoProduto}`);
}

exibeProduto(produto,codigoProduto);
