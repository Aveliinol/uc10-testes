import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import "../livroForm/LivroForm.css"

function LivroEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [livro, setLivro] = useState({
    titulo: "",
    autor: "",
    ano_publicacao: "",
    genero: "",
    preco: ""
  });

  // Carregar dados do livro
  useEffect(() => {
    api.get(`/livros/${id}`)
      .then((res) => setLivro(res.data.livro))
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setLivro({ ...livro, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/livros/${id}`, {
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
      <h2>Editar Livro</h2>
      <form onSubmit={handleSubmit}>
        <input name="titulo" placeholder="Título" value={livro.titulo} onChange={handleChange} />
        <input name="autor" placeholder="Autor" value={livro.autor} onChange={handleChange} />
        <input type="number" name="ano_publicacao" placeholder="Ano" value={livro.ano_publicacao} onChange={handleChange} />
        <input name="genero" placeholder="Gênero" value={livro.genero} onChange={handleChange} />
        <input type="number" step="0.01" name="preco" placeholder="Preço" value={livro.preco} onChange={handleChange} />
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
}

export default LivroEdit;
