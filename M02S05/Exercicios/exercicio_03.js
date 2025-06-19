let tarefa = document.getElementById("tarefa");
function add() {
  const lista = document.getElementById("listagem");
  const li = document.createElement("li");

  li.innerHTML = `
  <li>${tarefa.value}</li>`;

  lista.appendChild(li);

  limparCampo();
}

function limparCampo() {
  tarefa.value = "";
}
