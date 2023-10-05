interface Animal {
  nome: string;
}

interface Mamifero extends Animal {
  tipo: string;
}

const cachorro: Mamifero = {
  nome: "Bobby",
  tipo: "Cachorro",
};
