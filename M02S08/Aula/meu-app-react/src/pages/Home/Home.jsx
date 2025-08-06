import "./Home.css";
import { useEffect, useState } from "react";
import Header from "../../components/Header";

import ContactUs from "../../components/Contact/ContactUs";
import ItemFeedback from "../../components/ItemFeedback/ItemFeedback";
import ItemReceita from "../../components/ItemCardapio";
import { toast } from "react-toastify";

function Home() {
  const [products, setProducts] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  // useEffect(() => {
  //   const productsInLocalStorage = JSON.parse(localStorage.getItem("@products")) || [];
  //   setProducts(productsInLocalStorage);
  // }, []); // Deve executar uma unica vez

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then(async (response) => {
        const produtosApi = await response.json();
        setProducts(produtosApi);
      })
      .catch(() => toast.error("Erro ao buscar os produtos!"));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/feedbacks")
      .then(async (response) => {
        const dadosApi = await response.json();
        setFeedbacks(dadosApi);
      })
      .then(() => toast.error("Erro ao buscar os feedbacks!"));
  }, []);

  return (
    <div>
      <Header />

      <section>
        <h2>Nosso Cardápio</h2>

        <div className="container-cardapio">
          {products.map((product) => (
            <ItemReceita key={product.id} title={product.name} description={product.description} price={product.price} />
          ))}
        </div>
      </section>

      <ContactUs />

      <section className="container-feedback">
        <h2>Feedback dos clientes</h2>
        <ul>
          {feedbacks.map((feedback) => (
            <ItemFeedback key={feedback.id} author={feedback.name} comment={feedback.message} />
          ))}

          {/* <ItemFeedback author="Douglas" comment="Lorem ipsum lore impsum Lorem ipsum lore impsum Lorem ipsum lore impsum " />
          <ItemFeedback author="Maria" comment="Adorei as empadas, muito saborosas!" />
          <ItemFeedback author="João" comment="Atendimento excelente e entrega rápida." />
          <ItemFeedback author="Ana" comment="Empada de queijo é minha favorita!" />
          <ItemFeedback author="Carlos" comment="Recomendo para todos os meus amigos." />
          <ItemFeedback author="Fernanda" comment="Variedade incrível no cardápio." />
          <ItemFeedback author="Paulo" comment="Muito bom, voltarei a comprar." />
          <ItemFeedback author="Juliana" comment="Ótima experiência, parabéns!" /> */}
        </ul>
      </section>
    </div>
  );
}

export default Home;
