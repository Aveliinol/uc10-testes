const express = require('express');
const livroController = require('../controllers/livro.controller');

const router = express.Router();

router.post('/', livroController.criarLivro);

router.get('/', livroController.listarTodos);

router.get('/busca', livroController.listarPorNome);

router.get('/:id', livroController.listarPorId);

router.put('/:id', livroController.atualizarLivro);

router.delete('/:id', livroController.deletarLivro)


module.exports = router