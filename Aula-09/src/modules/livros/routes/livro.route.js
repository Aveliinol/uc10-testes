const express = require('express');
const livroController = require('../controllers/livro.controller');

const router = express.Router();

router.post('/', livroController.criarLivro)


module.exports = router