import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./LivroForm.css";

function LivroForm() {
  const [livro, setLivro] = useState({
    titulo: "",
    autor: "",
    ano_publicacao: "",
    genero: "",
    preco: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLivro({ ...livro, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/livros", { 
        ...livro, 
        ano_publicacao: Number(livro.ano_publicacao),
        preco: Number(livro.preco)
      });
      navigate("/livros");
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="livro-form">
      <h2>Adicionar Livro</h2>
      <form onSubmit={handleSubmit}>
        <input name="titulo" placeholder="Título" value={livro.titulo} onChange={handleChange} />
        <input name="autor" placeholder="Autor" value={livro.autor} onChange={handleChange} />
        <input type="number" name="ano_publicacao" placeholder="Ano" value={livro.ano_publicacao} onChange={handleChange} />
        <input name="genero" placeholder="Gênero" value={livro.genero} onChange={handleChange} />
        <input type="number" step="0.01" name="preco" placeholder="Preço" value={livro.preco} onChange={handleChange} />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default LivroForm;
