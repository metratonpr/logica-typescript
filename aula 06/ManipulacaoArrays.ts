// Criando um array de numeros
let numeros: number[] = [1, 2, 3, 4, 5];

// Adcionando Elementos
numeros.push(6);

// Removendo o ultimo elemento
numeros.pop();

//Obtendo o tamanho do array
console.log("Tamanho do array: " + numeros.length);

//Iterando com for..of
for (let numero of numeros) {
  console.log("Numero: " + numero);
}

// Iterando com forEach()
numeros.forEach((numero) => {
  console.log("Numero: " + numero);
});
