/*
    O card deve conter um título, descrição e um botão ‘Curtir’
    Quando clicado, o botão de curtir deve alternar a cor e o texto entre “Curtir” e “Curtido”
*/

const btnCurtir = document.getElementById("curtir");

btnCurtir.addEventListener("click", () => {
  if (btnCurtir.className === "btn-curtir") {
    btnCurtir.className = "btn-curtido";
    btnCurtir.innerText = "Curtido";
  } else {
    btnCurtir.className = "btn-curtir";
    btnCurtir.innerText = "Curtir";
  }
});
