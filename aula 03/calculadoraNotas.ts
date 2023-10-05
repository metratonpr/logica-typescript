function calcularMedia(...notas: number[]): number {
  let soma = 0;
  for (let nota of notas) {
    soma += nota;
  }

  return soma / notas.length;
}

const media = calcularMedia(8, 7, 9, 6.5);

console.log("Média das notas: " + media);
