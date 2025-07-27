import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="empresa-info">
          <h3>Energia Solar 365</h3>
          <p>CNPJ: 12.345.678/0001-90</p>
          <p>E-mail: contato@ecosolar.com.br</p>
          <p>Endereço: Rua Verde, 123 - Bairro Sustentável, SC</p>
        </div>

        <div className="redes-sociais">
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="WhatsApp">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
      <p className="copyright">&copy; {new Date().getFullYear()} Energia Solar 365. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
