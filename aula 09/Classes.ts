class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  cumprimentar(): string {
    return `Ola, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
}

const pessoa1 = new Pessoa("Alice", 30);
console.log(pessoa1.cumprimentar);

