function calcularMedia() {
    var notas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        notas[_i] = arguments[_i];
    }
    var soma = 0;
    for (var _a = 0, notas_1 = notas; _a < notas_1.length; _a++) {
        var nota = notas_1[_a];
        soma += nota;
    }
    return soma / notas.length;
}
var media = calcularMedia(8, 7, 9, 6.5);
console.log("Média das notas: " + media);
