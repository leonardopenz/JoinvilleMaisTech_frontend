import "./SobreNos.css";
function SobreNos() {
  return (
    <div id="sobre" className="sobre-nos">
      <h2>Sobre Nós</h2>
      <figure>
        <img
          src="https://solarprime.com.br/wp-content/uploads/2018/11/255012-energia-solar-no-verao-voce-sabe-como-ela-funciona-nessa-epoca-do-ano.jpg"
          alt="Painel solar em telhado residencial"
        />
        <figcaption>
          Somos a Energia Solar 365, referencia em projetos sustentaveis. Instalamos e gerenciamos sistemas residenciais, comerciais e rurais com alta
          eficiência e confiabilidade.
        </figcaption>
      </figure>
      <div className="dados-mercado">
        <h3>Dados do Mercado Brasileiro (até 2025)</h3>
        <ul>
          <li>
            <strong>Economia na conta de luz:</strong>até 90%
          </li>
          <li>
            <strong>Payback médio:</strong> 4 a 6 anos
          </li>
          <li>
            <strong>Redução de CO2:</strong>~1,5 tCO2 por sistema/ano
          </li>
          <li>
            <strong>Sistemas conectados:</strong> mais de 400.000 (fonte: ANEEL, abril/2025)
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SobreNos;
