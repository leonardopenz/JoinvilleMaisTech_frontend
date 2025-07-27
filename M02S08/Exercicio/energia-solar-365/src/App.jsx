import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Orcamento from "./components/Orcamento";
import PorQueInvestir from "./components/PorQueInvestir";
import Produtos from "./components/Produtos";
import SobreNos from "./components/SobreNos";

function App() {
  return (
    <>
      <Navbar />
      <SobreNos />
      <PorQueInvestir />
      <Produtos />
      <Orcamento />
      <Footer />
    </>
  );
}

export default App;
