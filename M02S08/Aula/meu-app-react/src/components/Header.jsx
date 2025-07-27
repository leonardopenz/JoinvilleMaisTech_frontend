import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Empadas do LAB365</h1>
      <p>O sabor que compila com o seu paladar</p>

      <nav>
        <a href="#cardapio">Cardápio</a>
        <a href="#contato">Contato</a>
        <a href="avaliacoes">Avaliações</a>
      </nav>
    </header>
  );
}

export default Header;
