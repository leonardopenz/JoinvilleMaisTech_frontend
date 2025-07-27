import "./ItemCardapio.css";
function ItemReceita(props) {
  return (
    <article className="cardapio-item">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <span>R$ {props.price}</span>
      <button>
        <img src="https://cdn-icons-png.flaticon.com/512/124/124034.png" alt="" width={"15px"} style={{ marginRight: "5px" }} />
        Pedir no WhatsApp
      </button>
    </article>
  );
}

export default ItemReceita;
