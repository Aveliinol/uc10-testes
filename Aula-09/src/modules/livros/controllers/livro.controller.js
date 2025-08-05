const LivroModel = require("../models/livro.model");

class LivroController {
    static async criarLivro(req, res){
        try {
            const { titulo, autor, ano_publicacao, genero, preco} = req.body;
            if (  !titulo || !autor || !ano_publicacao || !genero || !preco ){
                return res.status(400).json({msg: "Todos os campos são obrigatórios"})
            }
            if ( typeof ano_publicacao !== 'number' ){
                return res.status(400).json({msg: "Ano de publicação deve ser um número"})
            }
            if ( preco < 0){
                return res.status(400).json({msg: "Preço deve ser maior que zero"})
            }
            if ( titulo.length < 2){
                return res.status(400).json({msg: "Título deve ter pelo menos 2 caracteres"})
            }
            if ( !["Romance", "Ficção", "Aventura", "Terror", "Fantasia", "Biografia", "Drama"].some(g => g === genero) ){
                return res.status(400).json({ msg: "Gênero inválido" });
            }
            if ( typeof preco !== 'number' ){
                return res.status(400).json({msg: "Preço deve ser um número"})
            }
            const livro = await LivroModel.create({ titulo, autor, ano_publicacao, genero, preco });
            res.status(201).json({msg: 'Livro criado com sucesso', livro})
        } catch (error) {
            res.status(500).json({ msg: "Erro no sistema. Tente novamente mais tarde!" });
        }
    }

}

module.exports = LivroController