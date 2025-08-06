import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CadastroProduto from "./pages/CadastroProduto/CadastroProduto";
import Contador from "./pages/Contador/Contador";
import Carrinho from "./pages/Carrinho/Carrinho";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/cadastro" Component={CadastroProduto} />
        <Route path="/contador" Component={Contador} />
        <Route path="/carrinho" Component={Carrinho} />
      </Routes>
    </div>
  );
}

export default App;
