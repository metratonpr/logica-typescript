// Definindo uma interface Cliente para representar a estrutura do objeto
interface Cliente {
  nome: string;
  email: string;
  telefone: string;
}

// Criar um array vazio para armazenar os clientes
const clientes: Cliente[] = [];

// Função para cadastrar um novo cliente no array de clientes.
function cadastrarCliente(nome: string, email: string, telefone: string): void {
  // criando um novo cliente com os dados forncedidos
  const novoCliente: Cliente = {
    nome,
    email,
    telefone,
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
