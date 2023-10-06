class Animal {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  fazerBarulho(): void {
    console.log("Barulho de animal");
  }
}

class Cachorro extends Animal {
  fazerBarulho(): void {
    console.log("Au Au");
  }
}

const cachorro = new Cachorro("Bobby");

cachorro.fazerBarulho();
