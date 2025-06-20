const button = document.querySelector(".dropdown button");
const menu = document.querySelector(".dropdown-menu");

// Ao clicar no botão, alterna o menu
button.addEventListener("click", function (event) {
  event.stopPropagation(); // Evita fechar ao clicar no próprio botão
  menu.classList.toggle("show");
});

// Ao clicar fora, fecha o menu
document.addEventListener("click", function () {
  menu.classList.remove("show");
});
