/* 
    Solicite para o usuário um título para a página;
    Exiba, na página HTML, através de em uma tag h1, o título que o usuário digitou.
*/

const titulo = prompt("Digite o título da página");

/* 
//Opção de seleção onde a query retorna uma lista de elementos h1
const title = document.getElementsByTagName('h1');
title[0].textContent = titulo;
*/

// Opção de seleção onde a query retorna
// um único elemento através da busca por id
document.getElementById("title").textContent = titulo;
