import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./LivroList.css";

function LivroList() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    api.get("/livros")
      .then((res) => setLivros(res.data))
      .catch((err) => console.error(err));
  }, []);

  const deletar = async (id) => {
    if (window.confirm("Deseja deletar este livro?")) {
      await api.delete(`/livros/${id}`);
      setLivros(livros.filter(l => l.id !== id));
    }
  };

  return (
    <div className="livro-list">
      <h2>Lista de Livros</h2>
      <ul>
        {livros.map((livro) => (
          <li key={livro.id}>
          <Link to={`/livros/${livro.id}`}>{livro.titulo}</Link> - {livro.autor} 
          <Link to={`/livros/editar/${livro.id}`}>
            <button>Editar</button>
          </Link>
          <button onClick={() => deletar(livro.id)}>Excluir</button>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default LivroList;
