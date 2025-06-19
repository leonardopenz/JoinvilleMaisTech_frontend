/*
    Inclua o título (h1): ‘Cadastro de usuários’

    Crie uma tabela vazia que contenha as colunas:
    Nome 
    E-mail
    Perfil
    Ação (possuindo os botões ‘Alterar’ e ‘Excluir’)
        *Podemos utilizar a tabela criada no exercício III da Semana 2 

    Crie uma iteração que solicite as 3 informações: Nome, E-mail e Perfil; após recebê-las, crie uma nova linha no corpo da tabela mostrando os dados digitados
    Esta iteração deve continuar até o usuário digitar “sair”
*/

let confirmacao = "";

do {
  const nome = prompt("Digite um Nome:");
  const email = prompt("Digite um Email:");
  const perfil = prompt("Digite um Perfil:");

  const tableBody = document.getElementById("tabela-usuarios");

  const tr = document.createElement("tr");

  //Exemplo utilizando template literals
  tr.innerHTML = `
        <td>${nome}</td>
        <td>${email}</td>
        <td>${perfil}</td>
        <td>
            <button>Alterar</button>
            <button>Excluir</button>
        </td>
    `;

  /*
    //Exemplo utilizando createElement
    
    const tdNome = document.createElement('td');
    tdNome.innerText = nome;

    const tdEmail = document.createElement('td');
    tdEmail.innerText = email;

    const tdPerfil = document.createElement('td');
    tdPerfil.innerText = perfil;

    tr.appendChild(tdNome);
    tr.appendChild(tdEmail);
    tr.appendChild(tdPerfil);

    const tdAcoes = document.createElement('td');
    const btnAlterar = document.createElement('button');
    btnAlterar.innerText = 'Alterar';

    const btnExcluir = document.createElement('button');
    btnExcluir.innerText = 'Excluir';

    tdAcoes.appendChild(btnAlterar);
    tdAcoes.appendChild(btnExcluir);

    tr.appendChild(tdAcoes);
    */

  tableBody.appendChild(tr);

  confirmacao = prompt("Digite 'sair' caso não deseje continuar ou qualquer outra tecla para continuar:");
} while (confirmacao.toLowerCase() !== "sair");
