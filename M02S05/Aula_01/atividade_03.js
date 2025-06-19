/* 

*/

const titulo = prompt("Digite o título da página");
const h1 = document.createElement("h1");
h1.textContent = titulo;
document.body.appendChild(h1);

/*
const paragrafo_1 = prompt('Digite o primeiro parágrafo da página');
const p1 = document.createElement('p');
p1.innerText = paragrafo_1;
document.body.appendChild(p1);

const paragrafo_2 = prompt('Digite o segundo parágrafo da página');
const p2 = document.createElement('p');
p2.innerText = paragrafo_2;
document.body.appendChild(p2);

const paragrafo_3 = prompt('Digite o terceiro parágrafo da página');
const p3 = document.createElement('p');
p3.innerText = paragrafo_3;
document.body.appendChild(p3);
*/

for (let i = 1; i <= 3; i++) {
  const posicao = i === 1 ? "primeiro" : i === 2 ? "segundo" : "terceiro";
  const paragrafo = prompt(`Digite o ${posicao} parágrafo da página`);

  const p = document.createElement("p");
  p.innerText = paragrafo;
  document.body.appendChild(p);
}
