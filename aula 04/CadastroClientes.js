// Criar um array vazio para armazenar os clientes
var clientes = [];
// Função para cadastrar um novo cliente no array de clientes.
function cadastrarCliente(nome, email, telefone) {
    // criando um novo cliente com os dados forncedidos
    var novoCliente = {
        nome: nome,
        email: email,
        telefone: telefone,
    };
    // Adcionando o novo cliente ao array de clientes.
    clientes.push(novoCliente);
}
// Adcionar novos clientes atraves da função criada
cadastrarCliente("Joao", "joao@joao.com.br", "(xx) xxxx-xxxx");
cadastrarCliente("Maria", "maria@maria.com.br", "(xx) xxxx-xxxx");
// Exibir os dados cadastrados
console.log("Cadastro de clientes: ");
console.log(clientes);
