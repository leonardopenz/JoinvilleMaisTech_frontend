import "./form.css";

function Form() {
  return (
    <form className="form">
      <div>
        <h3>Novo post</h3>
        <label htmlFor="title">Título</label>
        <input type="text" id="title" name="title" placeholder="Título" />
      </div>
      <div>
        <label htmlFor="content">Conteúdo</label>
        <textarea id="content" name="content" placeholder="Descrição"></textarea>
      </div>
      <button className="btn-register" type="submit">
        Cadastrar
      </button>
    </form>
  );
}

export default Form;
