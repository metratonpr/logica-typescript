// Criar um numero aleatorio usando a biblioteca Math
const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

// Define o numero do palpite
const palpite = 5;

if (palpite === numeroAleatorio) {
  console.log("Parabens, voce acertou!");
} else {
  console.log("Tente novamente. O numero era " + numeroAleatorio + ".");
}
