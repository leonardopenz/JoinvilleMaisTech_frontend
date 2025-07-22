import "./Produtos.css";

function Produtos() {
  return (
    <div id="produtos" className="produtos">
      <h2>Nossos Produtos</h2>

      <div className="produtos-lista">
        <div className="produto-card">
          <img
            src="https://www.neosolar.com.br/media/catalog/product/cache/3baa78894a6170a4fe1da4f78d1c9db0/p/a/painel_solar_fotovoltaico_450w_monocristalino_-_osda_-_lado.jpg"
            alt="Placa Solar 400 W"
          />
          <h3>Placa Solar 400 W</h3>
          <p>Alta eficiência para uso residencial e comercial.</p>
        </div>

        <div className="produto-card">
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_765242-MLB76374744349_052024-O-kit-completo-solar-224-kwp-4-paineis-inversor-5kw.webp"
            alt="Kit Solar Completo"
          />
          <h3>Kit Solar Completo</h3>
          <p>Inclui placas, inversor, estrutura, cabos e instalação profissional.</p>
        </div>

        <div className="produto-card">
          <img
            src="https://bcb27500.delivery.rocketcdn.me/wp-content/uploads/2022/03/canal-solar-Inversor-solar-o-que-e-e-pra-que-serve-2.jpg"
            alt="Inversor Solar"
          />
          <h3>Inversor Solar</h3>
          <p>Transforma energia solar em energia elétrica para sua casa.</p>
        </div>
      </div>
    </div>
  );
}

export default Produtos;
