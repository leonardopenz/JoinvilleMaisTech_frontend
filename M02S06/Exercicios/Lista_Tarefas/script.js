let tarefa = document.getElementById("tarefa");

document.addEventListener("DOMContentLoaded", carregarTarefas);

function add() {
  const lista = document.getElementById("listagem");

  if (tarefa.value.trim() === "") return;

  let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

  tarefas.push(tarefa.value.trim());

  localStorage.setItem("tarefas", JSON.stringify(tarefas));

  carregarTarefas();

  limparCampo();
}

function carregarTarefas() {
  const lista = document.getElementById("listagem");
  lista.innerHTML = "";

  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

  tarefas.forEach((t, index) => {
    const li = document.createElement("li");
    li.textContent = t;

    const btn = document.createElement("button");
    btn.textContent = "Excluir";
    btn.classList.add("btn-excluir");
    btn.onclick = () => excluirTarefa(index);

    li.appendChild(btn);
    lista.appendChild(li);
    lista.appendChild(li);
  });
}

function excluirTarefa(index) {
  let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

  tarefas.splice(index, 1);

  localStorage.setItem("tarefas", JSON.stringify(tarefas));

  carregarTarefas();
}

function limparCampo() {
  tarefa.value = "";
}
