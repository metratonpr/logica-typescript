var Contato = /** @class */ (function () {
    function Contato(nome, email, telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
    return Contato;
}());
var GerenciadorContatos = /** @class */ (function () {
    function GerenciadorContatos() {
        this.contatos = [];
    }
    GerenciadorContatos.prototype.adicionarContato = function (contato) {
        this.contatos.push(contato);
    };
    GerenciadorContatos.prototype.listarContatos = function () {
        return this.contatos;
    };
    GerenciadorContatos.prototype.buscarContatoPorNome = function (nome) {
        return this.contatos.find(function (contato) { return contato.nome === nome; });
    };
    return GerenciadorContatos;
}());
var gerenciador = new GerenciadorContatos();
gerenciador.adicionarContato(new Contato("Alice", "alice@email.com", "(xx) xxxxx-xxxx"));
gerenciador.adicionarContato(new Contato("Bob", "bob@email.com", "(xx) xxxxx-xxxx"));
console.log("Contatos:");
console.log(gerenciador.listarContatos);
console.log("Buscar por nome: Bob");
console.log(gerenciador.buscarContatoPorNome("Bob"));
