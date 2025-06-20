let contador = 0;

document.getElementById("adicionar").addEventListener("click", function () {
  contador++;
  document.getElementById("contador").textContent = contador;
});

document.getElementById("subtrair").addEventListener("click", function () {
  contador--;
  document.getElementById("contador").textContent = contador;
});

document.getElementById("zerar").addEventListener("click", function () {
  document.getElementById("contador").textContent = 0;
});
