//Parametro facultativo
function saudacao(nome?: string): string {
  if (nome) {
    return "Ola, " + nome + "!";
  } else {
    return "Ola!";
  }
}

console.log(saudacao());
console.log(saudacao("Alice"));

//Parametro padrao
function calcularValorTotal(preco: number, quantidade: number = 1): number {
  return preco * quantidade;
}

console.log(calcularValorTotal(10));
console.log(calcularValorTotal(20, 2));

//Sobrecarga de funções
function calcularArea(forma: "quadrado", lado: number): number;
function calcularArea(forma: "triangulo", base: number, altura: number): number;
function calcularArea(forma: any, ...args: any[]): number {
  if (forma === "quadrado") {
    const lado = args[0];
    return lado * lado;
  } else if (forma === "triangulo") {
    const base = args[0];
    const altura = args[1];
    return (base * altura) / 2;
  } else {
    throw new Error("Forma não suportada!");
  }
}
