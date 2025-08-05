const express = require('express');
const { sequelize } = require('./src/config/configDB');
require('dotenv').config();
const livroRoutes = require('./src/modules/livros/routes/livro.route');

const app = express();
const PORTA = process.env.PORT;
app.use(express.json());

app.use('/livros', livroRoutes);


app.listen(PORTA, ()=>{
    console.log(`aplicação rodando em http://localhost:${PORTA}`); 
})

module.exports = app;

