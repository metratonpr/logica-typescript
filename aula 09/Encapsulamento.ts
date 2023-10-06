class ContaBancaria {
  private saldo: number = 0;

  depositar(valor: number): void {
    if (valor > 0) {
      this.saldo += valor;
    }
  }

  consultarSlado(): number {
    return this.saldo;
  }
}

const conta = new ContaBancaria();
conta.depositar(100);
console.log("Saldo: " + conta.consultarSlado());
