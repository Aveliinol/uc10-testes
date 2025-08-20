import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import LivroList from "./pages/livroList/LivroList";
import LivroForm from "./pages/livroForm/LivroForm";
import LivroDetalhe from "./pages/livroDetalhe/LivroDetalhe";
import LivroEdit from "./pages/livroEdit/LivroEdit";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livros" element={<LivroList />} />
          <Route path="/livros/novo" element={<LivroForm />} />
          <Route path="/livros/:id" element={<LivroDetalhe />} />
          <Route path="/livros/editar/:id" element={<LivroEdit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
