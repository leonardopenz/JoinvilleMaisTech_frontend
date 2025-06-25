const comentario = document.getElementById("comentario");
const msg = document.getElementById("msg");

comentario.addEventListener("keyup", () => {
  msg.textContent = 250 - comentario.value.length + "caracteres restantes";
});
