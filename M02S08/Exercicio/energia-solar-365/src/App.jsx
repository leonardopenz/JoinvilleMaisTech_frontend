import "./App.css";
import Navbar from "./components/Navbar";
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
    </>
  );
}

export default App;
