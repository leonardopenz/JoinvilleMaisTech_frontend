const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 100 },
];

produtos.forEach((produto) => {
  const cardProduto = document.getElementById("produtos");

  const card = document.createElement("div");
  card.innerHTML = `
    <h3>${produto.nome}</h3>
    <p>R$ ${produto.preco}</p>`;

  cardProduto.appendChild(card);
});
