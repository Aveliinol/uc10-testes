import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import "./LivroDetalhe.css";

function LivroDetalhe() {
  const { id } = useParams();
  const [livro, setLivro] = useState(null);

  useEffect(() => {
    api.get(`/livros/${id}`)
      .then((res) => setLivro(res.data.livro))
      .catch((err) => console.error(err));
  }, [id]);

  if (!livro) return <p>Carregando...</p>;

  return (
    <div className="livro-detalhe">
      <h2>{livro.titulo}</h2>
      <p><strong>Autor:</strong> {livro.autor}</p>
      <p><strong>Ano:</strong> {livro.ano_publicacao}</p>
      <p><strong>Gênero:</strong> {livro.genero}</p>
      <p><strong>Preço:</strong> R$ {livro.preco}</p>
    </div>
  );
}

export default LivroDetalhe;
