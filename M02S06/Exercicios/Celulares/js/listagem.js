document.addEventListener("DOMContentLoaded", () => {
  const tabela = document.getElementById("tabela-corpo");
  const btnCadastrar = document.getElementById("btnCadastrar");

  function carregarTabela() {
    const celulares = JSON.parse(localStorage.getItem("celulares")) || [];
    tabela.innerHTML = "";

    celulares.forEach((celular, index) => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${celular.marca}</td>
        <td>${celular.modelo}</td>
        <td>${celular.cor}</td>
        <td>${celular.valor.toFixed(2)}</td>
        <td>${celular.estado}</td>
        <td>${celular.infos}</td>
        <td>
          <button class="btn-alterar" onclick="alterarCelular(${index})">Alterar</button>
          <button class="btn-excluir" onclick="excluirCelular(${index})">Excluir</button>
        </td>
      `;

      tabela.appendChild(tr);
    });
  }

  window.alterarCelular = function (index) {
    window.location.href = `cadastro.html?editar=${index}`;
  };

  window.excluirCelular = function (index) {
    const celulares = JSON.parse(localStorage.getItem("celulares")) || [];
    celulares.splice(index, 1);
    localStorage.setItem("celulares", JSON.stringify(celulares));
    carregarTabela();
  };

  if (btnCadastrar) {
    btnCadastrar.addEventListener("click", () => {
      window.location.href = "cadastro.html";
    });
  }

  carregarTabela();
});
