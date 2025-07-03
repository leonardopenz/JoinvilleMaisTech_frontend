class CarrinhoDeCompras {
  #itens = [];

  adicionarItem(nome, preco) {
    this.#itens.push({ nome, preco });
    console.log(`Item "${nome}" adicionado com preço R$${preco.toFixed(2)}.`);
  }

  listarItens() {
    console.log("Itens no carrinho:");
    this.#itens.forEach((item, index) => {
      console.log(`${index + 1}. ${item.nome} - R$${item.preco.toFixed(2)}`);
    });
  }

  calcularTotal() {
    const total = this.#itens.reduce((soma, item) => soma + item.preco, 0);
    console.log(`Total da compra: R$${total.toFixed(2)}`);
    return total;
  }
}

// Testando a implementação:
const carrinho = new CarrinhoDeCompras();

carrinho.adicionarItem("Camisa", 59.9);
carrinho.adicionarItem("Calça", 89.5);

carrinho.listarItens();
carrinho.calcularTotal();
