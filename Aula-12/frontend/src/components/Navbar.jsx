import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/livros">Livros</Link>
      <Link to="/livros/novo">Adicionar Livro</Link>
    </nav>
  );
}

export default Navbar;
