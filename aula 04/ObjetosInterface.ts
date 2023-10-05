interface Carro {
  marca: string;
  modelo: string;
  ano: number;
}

const meuCarro: Carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
};

interface Produto {
  nome: string;
  preco: number;
}

const produto: Produto = {
    nome: "Notebook",
    preco: 1500
}