var Carro = /** @class */ (function () {
    function Carro(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    Carro.prototype.exibirInformacoes = function () {
        return "".concat(this.marca, " ").concat(this.modelo);
    };
    return Carro;
}());
var carro1 = new Carro("Toyota", "Corolla");
var carro2 = new Carro("Ford", "Focus");
console.log(carro1.exibirInformacoes());
console.log(carro2.exibirInformacoes());
