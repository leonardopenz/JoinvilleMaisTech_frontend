class ContaBancaria {
  #saldo; // propriedade privada

  constructor() {
    this.#saldo = 0;
  }

  depositar(valor) {
    if (valor <= 0) {
      window.alert("Erro: valor de depósito deve ser maior que zero.");
    } else {
      this.#saldo += valor;
      return `Depósito de R$${valor.toFixed(2)} realizado com sucesso.`;
    }
  }

  verSaldo() {
    return `Saldo atual: R$${this.#saldo.toFixed(2)}`;
  }
}

// Exemplo de uso:
const conta = new ContaBancaria();

console.log(conta.depositar(100)); // "Depósito de R$100.00 realizado com sucesso."
console.log(conta.verSaldo()); // "Saldo atual: R$100.00"
console.log(conta.depositar(-50)); // "Erro: valor de depósito deve ser maior que zero."

console.log(conta.depositar(120));
console.log(conta.depositar(10));
console.log(conta.verSaldo());
