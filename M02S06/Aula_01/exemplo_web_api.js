const btnConsole = document.getElementById("console");
const btnRecarregar = document.getElementById("recarregar");
const btnVoltar = document.getElementById("voltar");
const btnAvancar = document.getElementById("avancar");
const btnSession = document.getElementById("session");
const btnLocal = document.getElementById("local");
const btnRecuperarSession = document.getElementById("recuperarSession");
const btnRecuperarLocal = document.getElementById("recuperarLocal");
const btnConfirmar = document.getElementById("confirmar");
const btnDelay = document.getElementById("delay");
const btnIntervalo = document.getElementById("intervalo");
const btnPararIntervalo = document.getElementById("pararIntervalo");

let idIntervalo;

/* console */
btnConsole.addEventListener("click", () => {
  console.log("Mensagem de log");
  console.info("Mensagem de log");
  console.error("Mensagem de log");
  console.warn("Mensagem de log");
});

/* navigation */
btnRecarregar.onclick = () => {
  navigation.reload();
};

btnVoltar.onclick = () => {
  navigation.back();
};

btnAvancar.onclick = () => {
  navigation.forward();
};

/* session e local - storage */

btnSession.onclick = () => {
  const obj = { nome: "Nome teste", idade: 20 };

  console.log("obj", obj);
  console.log("JSON.stringify(obj)", JSON.stringify(obj));

  sessionStorage.setItem("set_obj", obj);
  sessionStorage.setItem("set_stringify_obj", JSON.stringify(obj));
};

/* Storage */

btnLocal.onclick = () => {
  const lista = [1, 2, 3];

  console.log("lista", lista);
  console.log("JSON.stringify(lista)", JSON.stringify(lista));

  localStorage.setItem("set_lista", lista);
  localStorage.setItem("set_stringify_lista", JSON.stringify(lista));
};

btnRecuperarSession.onclick = () => {
  console.log(sessionStorage.getItem("set_obj"));
  console.log(JSON.parse(sessionStorage.getItem("set_stringify_obj")));
};

btnRecuperarLocal.onclick = () => {
  console.log(localStorage.getItem("set_lista"));
  console.log(JSON.parse(localStorage.getItem("set_stringify_lista")));
};

/* DOM -> window */

//confirm
btnConfirmar.onclick = () => {
  if (window.confirm("Deseja continuar?")) {
    console.log("Usuario continuou");
  } else {
    console.warn("Usuario cancelou");
  }
};

//setTimeout
btnDelay.onclick = () => {
  setTimeout(() => {
    console.log("Mensagem B");
  }, 2000); //tempo em milissegundos
  console.log("Mensagem A");
};

//setInterval
btnIntervalo.onclick = () => {
  let i = 0;
  idIntervalo = setInterval(() => {
    // retorna um id de execução
    console.log("i", i);
    i++;
  }, 500); //tempo em milissegundos
};

btnPararIntervalo.onclick = () => {
  clearInterval(idIntervalo); //para a execução do id passado como parametro
};
