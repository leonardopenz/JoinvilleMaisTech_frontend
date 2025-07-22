import "./navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <h1>Energia Solar 365</h1>
      <p>Economize com o sol. Invista no seu futuro</p>

      <nav>
        <a href="#sobre">Sobre</a>
        <a href="#beneficios">Beneficios</a>
        <a href="#produto">Produto</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}

export default Navbar;
