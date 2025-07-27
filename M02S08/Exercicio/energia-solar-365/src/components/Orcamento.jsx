import "./orcamento.css";

function Orcamento() {
  return (
    <div id="orcamento" className="orcamento">
      <h2>Solicite um Orçamento</h2>
      <form>
        <input type="text" id="nome" name="nome" placeholder="Seu nome" required />

        <input type="email" id="email" name="email" placeholder="Seu e-mail" required />

        <textarea id="mensagem" name="mensagem" rows="4" placeholder="Deixe uma mensagem..."></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Orcamento;
