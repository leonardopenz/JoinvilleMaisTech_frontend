const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const erroEmail = document.getElementById("erroEmail");
const erroSenha = document.getElementById("erroSenha");
const formulario = document.getElementById("formulario");

// Validação do Email
emailInput.addEventListener("input", function () {
  if (!emailInput.value.includes("@")) {
    erroEmail.textContent = "O e-mail deve conter @";
  } else {
    erroEmail.textContent = "";
  }
});

emailInput.addEventListener("blur", function () {
  if (emailInput.value.trim() === "") {
    erroEmail.textContent = "O campo e-mail é obrigatório.";
  }
});

// Validação da Senha
senhaInput.addEventListener("input", function () {
  if (senhaInput.value.length < 6) {
    erroSenha.textContent = "A senha deve ter no mínimo 6 caracteres.";
  } else {
    erroSenha.textContent = "";
  }
});

senhaInput.addEventListener("blur", function () {
  if (senhaInput.value.trim() === "") {
    erroSenha.textContent = "O campo senha é obrigatório.";
  }
});

// Impedir envio se houver erros
formulario.addEventListener("submit", function (event) {
  if (!emailInput.value.includes("@") || senhaInput.value.length < 6 || emailInput.value.trim() === "" || senhaInput.value.trim() === "") {
    event.preventDefault();
    alert("Por favor, corrija os erros antes de enviar.");
  }
});
