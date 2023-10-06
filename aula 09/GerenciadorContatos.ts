class Contato {
  nome: string;
  email: string;
  telefone: string;

  constructor(nome: string, email: string, telefone: string) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
  }
}

class GerenciadorContatos {
  contatos: Contato[] = [];

  adicionarContato(contato: Contato): void {
    this.contatos.push(contato);
  }

  listarContatos(): Contato[] {
    return this.contatos;
  }

  buscarContatoPorNome(nome: string): Contato | undefined {
    return this.contatos.find((contato) => contato.nome === nome);
  }
}

const gerenciador = new GerenciadorContatos();
gerenciador.adicionarContato(
  new Contato("Alice", "alice@email.com", "(xx) xxxxx-xxxx")
);
gerenciador.adicionarContato(
  new Contato("Bob", "bob@email.com", "(xx) xxxxx-xxxx")
);

console.log("Contatos:");
console.log(gerenciador.listarContatos);
console.log("Buscar por nome: Bob");
console.log(gerenciador.buscarContatoPorNome("Bob"));
