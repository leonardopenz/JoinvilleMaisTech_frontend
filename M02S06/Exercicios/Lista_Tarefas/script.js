let tarefa = document.getElementById("tarefa");

document.addEventListener("DOMContentLoaded", () => {
  carregarTarefas();
  carregarConcluidas();
});

function add() {
  //const lista = document.getElementById("listagem");

  if (tarefa.value.trim() === "") return;

  let tarefas = JSON.parse(localStorage.getItem("tarefasPendentes")) || [];
  tarefas.push(tarefa.value.trim());
  localStorage.setItem("tarefasPendentes", JSON.stringify(tarefas));

  carregarTarefas();
  limparCampo();
}

function carregarTarefas() {
  const lista = document.getElementById("listagem");
  lista.innerHTML = "";

  const tarefas = JSON.parse(localStorage.getItem("tarefasPendentes")) || [];

  tarefas.forEach((t, index) => {
    const li = document.createElement("li");

    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = false;
    check.onchange = () => concluirTarefa(index);

    const texto = document.createElement("span");
    texto.textContent = t;

    const btn = document.createElement("button");
    btn.textContent = "Excluir";
    btn.classList.add("btn-excluir");
    btn.onclick = () => excluirTarefa(index);

    li.appendChild(check);
    li.appendChild(texto);
    li.appendChild(btn);
    lista.appendChild(li);
  });
}

function carregarConcluidas() {
  const lista = document.getElementById("concluidas");
  lista.innerHTML = "";

  const concluidas = JSON.parse(localStorage.getItem("tarefasConcluidas")) || [];

  concluidas.forEach((t, index) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = true;
    checkbox.onchange = () => desmarcarTarefa(index);

    const texto = document.createElement("span");
    texto.textContent = t;

    li.appendChild(checkbox);
    li.appendChild(texto);
    lista.appendChild(li);
  });
}

function concluirTarefa(index) {
  let pendentes = JSON.parse(localStorage.getItem("tarefasPendentes")) || [];
  let concluidas = JSON.parse(localStorage.getItem("tarefasConcluidas")) || [];

  const tarefaConcluida = pendentes.splice(index, 1)[0];
  concluidas.push(tarefaConcluida);

  localStorage.setItem("tarefasPendentes", JSON.stringify(pendentes));
  localStorage.setItem("tarefasConcluidas", JSON.stringify(concluidas));

  carregarTarefas();
  carregarConcluidas();
}

function desmarcarTarefa(index) {
  let pendentes = JSON.parse(localStorage.getItem("tarefasPendentes")) || [];
  let concluidas = JSON.parse(localStorage.getItem("tarefasConcluidas")) || [];

  const tarefaVoltando = concluidas.splice(index, 1)[0];
  pendentes.push(tarefaVoltando);

  localStorage.setItem("tarefasPendentes", JSON.stringify(pendentes));
  localStorage.setItem("tarefasConcluidas", JSON.stringify(concluidas));

  carregarTarefas();
  carregarConcluidas();
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
