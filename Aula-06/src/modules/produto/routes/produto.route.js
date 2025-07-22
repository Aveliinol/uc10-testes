const express = require('express');
const produtoController = require('../controllers/produto.controller');
const router = express.Router();

router.post('/', produtoController.criarProduto);






module.exports = router;