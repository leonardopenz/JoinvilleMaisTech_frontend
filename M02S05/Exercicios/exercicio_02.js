const menu = ["Home", "Sobre", "Contato"];

const nav = document.getElementById("menu");
menu.forEach((item) => {
  const link = document.createElement("a");
  link.textContent = item;
  link.href = "#";
  nav.appendChild(link);
});
