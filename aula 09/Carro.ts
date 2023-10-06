class Carro {
  marca: string;
  modelo: string;

  constructor(marca: string, modelo: string) {
    this.marca = marca;
    this.modelo = modelo;
  }

  exibirInformacoes(): string {
    return `${this.marca} ${this.modelo}`;
  }
}

const carro1 = new Carro("Toyota", "Corolla");

const carro2 = new Carro("Ford", "Focus");

console.log(carro1.exibirInformacoes());
console.log(carro2.exibirInformacoes());
