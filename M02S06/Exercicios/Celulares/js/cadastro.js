document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const btnSalvar = document.getElementById("btnSalvar");
  const btnVoltar = document.getElementById("btnVoltar");

  if (!form || !btnSalvar || !btnVoltar) return;

  const marca = document.getElementById("marca");
  const modelo = document.getElementById("modelo");
  const cor = document.getElementById("cor");
  const valor = document.getElementById("valor");
  const infos = document.getElementById("infos");
  const radios = document.querySelectorAll('input[name="estado"]');

  btnSalvar.disabled = true;

  function verificarCampos() {
    const estadoSelecionado = [...radios].some((r) => r.checked);
    const todosPreenchidos = marca.value && modelo.value.trim() && cor.value.trim() && valor.value.trim() && infos.value.trim() && estadoSelecionado;

    btnSalvar.disabled = !todosPreenchidos;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const editarIndex = urlParams.get("editar");
  const celulares = JSON.parse(localStorage.getItem("celulares")) || [];

  if (editarIndex !== null && celulares[editarIndex]) {
    const c = celulares[editarIndex];

    marca.value = c.marca;
    modelo.value = c.modelo;
    cor.value = c.cor;
    valor.value = c.valor;
    infos.value = c.infos;
    const estadoInput = document.getElementById(c.estado);
    if (estadoInput) {
      estadoInput.checked = true;
    }

    verificarCampos();
  }

  [marca, modelo, cor, valor, infos, ...radios].forEach((el) => {
    el.addEventListener("input", verificarCampos);
    el.addEventListener("change", verificarCampos);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const estadoSelecionado = [...radios].find((r) => r.checked)?.id;

    const celular = {
      marca: marca.value,
      modelo: modelo.value.trim(),
      cor: cor.value.trim(),
      valor: parseFloat(valor.value),
      estado: estadoSelecionado,
      infos: infos.value.trim(),
    };

    if (editarIndex !== null && celulares[editarIndex]) {
      celulares[editarIndex] = celular;
    } else {
      celulares.push(celular);
    }

    localStorage.setItem("celulares", JSON.stringify(celulares));
    form.reset();
    btnSalvar.disabled = true;

    alert("Dados salvos com sucesso");
  });

  btnVoltar.addEventListener("click", () => {
    window.location.href = "listagem.html";
  });
});
