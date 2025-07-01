function aplicarTema() {
  const temaSalvo = localStorage.getItem("tema") || "claro";
  document.body.classList.toggle("escuro", temaSalvo === "escuro");

  const botao = document.getElementById("toggle-tema");
  if (botao) {
    botao.textContent = temaSalvo === "escuro" ? "Tema Claro" : "Tema Escuro";
  }
}

function alternarTema() {
  const body = document.body;
  const temaAtual = body.classList.contains("escuro") ? "escuro" : "claro";
  const novoTema = temaAtual === "claro" ? "escuro" : "claro";

  body.classList.toggle("escuro", novoTema === "escuro");
  localStorage.setItem("tema", novoTema);

  const botao = document.getElementById("toggle-tema");
  if (botao) {
    botao.textContent = novoTema === "escuro" ? "Tema Claro" : "Tema Escuro";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  aplicarTema();

  const botaoTema = document.getElementById("toggle-tema");
  if (botaoTema) {
    botaoTema.addEventListener("click", alternarTema);
  }
});
