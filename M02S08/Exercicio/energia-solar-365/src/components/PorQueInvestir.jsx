import "./PorQueInvestir.css";

function PorQueInvestir() {
  return (
    <div id="por-que-investir" className="por-que-investir">
      <h2>Por que investir em Energia Solar?</h2>

      <div className="cards">
        <article className="beneficios">
          <h3>Redução da Conta</h3>
          <p>Economize até 90% na conta de energia elétrica.</p>
        </article>

        <article className="beneficios">
          <h3>Sustentabilidade</h3>
          <p>Energia limpa e renovável, ajudando o planeta.</p>
        </article>

        <article className="beneficios">
          <h3>Valorização do Imóvel</h3>
          <p>Residências com placas solares aumentam até 10% no valor de mercado.</p>
        </article>

        <article className="beneficios">
          <h3>Retorno Garantido</h3>
          <p>Payback em 4-6 anos e economia mensal garantida.</p>
        </article>
      </div>
    </div>
  );
}

export default PorQueInvestir;
