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
            if ( !['Romance', 'Conto', 'Biografia', 'Fantasia', 'Ficção', 'Suspense', 'Terror', 'Aventura', 'Drama'].some(g => g === genero) ){
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
    static containsSQLInjection(str) {
        const sqlInjectionPattern = /(['";])/;
        return typeof str === 'string' && sqlInjectionPattern.test(str);
    }
    static async sql(req, res){
        try {
            const { titulo, autor, ano_publicacao, genero, preco } = req.body;

            if ( this.containsSQLInjection(titulo)) {
                return res.status(400).json({msg: 'Título inválido'});
            }
            if ( this.containsSQLInjection(autor)) {
                return res.status(400).json({msg: 'Autor inválido'});
            }
            if ( this.containsSQLInjection(genero)) {
                return res.status(400).json({msg: 'Gênero inválido'});
            }
            if ( typeof ano_publicacao !== 'number') {
                return res.status(400).json({msg: 'Ano de publicação deve ser um número'});
            }
            if ( typeof preco !== 'number') {
                return res.status(400).json({msg: 'Preço deve ser um número'});
            }
        } catch (error) {
            res.status(500).json({msg: "Erro no sistema. Tente novamente mais tarde!"});
        }
    }
    static async listarTodos(req, res){
        try {
            const livro = await LivroModel.findAll()
            res.status(200).json(livro);
        } catch (error) {
            res.status(500).json({msg: "Erro no sistema. Tente novamente mais tarde!"});
        }
    }
    static async listarPorNome(req, res){
        try {
            const {titulo} = req.query;
            const livro = await LivroModel.findAll({where:{
                titulo:{ [require('sequelize').Op.like]: `%${titulo}%`
            }}});
            if (livro.length === 0) {
                return res.status(404).json({ msg: 'Livro não encontrado' });
            }
            res.status(200).json('Livro encontrado');
        } catch (error) {
            res.status(500).json({ msg: "Erro no sistema. Tente novamente mais tarde!", error: error.message}); 
        }
    }
    static async listarPorId(req, res){
        try {
            const livro = await LivroModel.findByPk(req.params.id);
            if(!livro){
                return res.status(404).json({msg: 'Livro não encontrado'})
            }
            res.status(200).json({msg: 'Livro encontrado', livro})
        } catch (error) {
            res.status(500).json({ msg: "Erro no sistema. Tente novamente mais tarde!" });
        }
    }
    static async atualizarLivro(req, res) {
        try {
        const { id } = req.params;
        const { titulo, autor, ano_publicacao, genero, preco } = req.body;
        if (  !titulo || !autor || !ano_publicacao || !genero || !preco ){
            return res.status(400).json({msg: "Dados inválidos para atualização"})
        }
        const livro = await LivroModel.findByPk(id);
        if (!livro) {
            return res.status(404).json({ msg: 'Livro não encontrado' });
        }
        await livro.update({ titulo, autor, ano_publicacao, genero, preco });
            res.status(200).json({msg: 'Livro atualizado com sucesso'})
        } catch (error) {
            res.status(500).json({ msg: "Erro no sistema. Tente novamente mais tarde!" });
        }
      }
      static async deletarLivro(req, res) {
        try {
          const { id } = req.params;
          const livro = await LivroModel.findByPk(id);
          if (!livro) {
            return res.status(404).json({ msg: 'Livro não encontrado' });
          }
          await livro.destroy();
          res.status(200).json({ msg: 'Livro deletado com sucesso' });
        } catch (error) {
            res.status(500).json({ msg: "Erro no sistema. Tente novamente mais tarde!" });
        }
      }
    

}

module.exports = LivroController