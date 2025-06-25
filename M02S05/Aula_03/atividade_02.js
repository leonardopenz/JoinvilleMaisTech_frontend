const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const btnLogin = document.getElementById("login");

if (usuario === "" && senha === "") {
  btnLogin.toggleAttribute(disabled);
} else {
  btnLogin.remove(disabled);
}
