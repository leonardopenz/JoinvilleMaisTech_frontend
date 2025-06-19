/*
    Solicite para o usuário a URL de uma imagem;
    Exiba, na página HTML, a imagem correspondente a esta URL.
*/

const url = prompt("Digite a URL da imagem:");

document.getElementById("imagem").src = url;
