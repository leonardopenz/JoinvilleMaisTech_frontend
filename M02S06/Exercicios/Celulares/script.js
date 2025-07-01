// Referências aos elementos

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const btnSalvar = document.getElementById("btnSalvar");
  const btnVoltar = document.getElementById("btnVoltar");

  const marca = document.getElementById("marca");
  const modelo = document.getElementById("modelo");
  const cor = document.getElementById("cor");
  const valor = document.getElementById("valor");
  const infos = document.getElementById("infos");
  const radios = document.querySelectorAll('input[name="estado"]');

  btnSalvar.disabled = true;

  function verificarCampos() {
    const estadoSelecionado = [...radios].some((radio) => radio.checked);

    if (marca.value && modelo.value.trim() && cor.value.trim() && valor.value.trim() && infos.value.trim() && estadoSelecionado) {
      btnSalvar.disabled = false;
    } else {
      btnSalvar.disabled = true;
    }
  }

  [marca, modelo, cor, valor, infos, ...radios].forEach((el) => {
    el.addEventListener("input", verificarCampos);
    el.addEventListener("change", verificarCampos);
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Impede envio do form

    const estadoSelecionado = [...radios].find((radio) => radio.checked)?.id;

    const celular = {
      marca: marca.value,
      modelo: modelo.value.trim(),
      cor: cor.value.trim(),
      valor: parseFloat(valor.value),
      estado: estadoSelecionado,
      infos: infos.value.trim(),
    };

    const celulares = JSON.parse(localStorage.getItem("celulares")) || [];
    celulares.push(celular);
    localStorage.setItem("celulares", JSON.stringify(celulares));

    form.reset();
    btnSalvar.disabled = true;

    alert("Dados salvos com sucesso");
  });

  btnVoltar.addEventListener("click", () => {
    window.location.href = "listagem.html";
  });
});

function carregarTabela() {
  const tabela = document.getElementById("tabela-corpo");
  tabela.innerHTML = "";

  const celulares = JSON.parse(localStorage.getItem("celulares")) || [];

  celulares.forEach((celular, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
            <td>${celular.marca}</td>
            <td>${celular.modelo}</td>
            <td>${celular.cor}</td>
            <td>${celular.valor.toFixed(2)}</td>
            <td>${celular.estado}</td>
            <td>${celular.infos}</td>
            <td><button onclick="excluirCelular(${index})">Excluir</button></td>
          `;

    tabela.appendChild(tr);
  });
}

function excluirCelular(index) {
  let celulares = JSON.parse(localStorage.getItem("celulares")) || [];
  celulares.splice(index, 1);
  localStorage.setItem("celulares", JSON.stringify(celulares));
  carregarTabela();
}

document.getElementById("btnCadastrar").addEventListener("click", () => {
  window.location.href = "cadastro.html";
});

window.addEventListener("DOMContentLoaded", carregarTabela);
