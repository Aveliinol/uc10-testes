const express = require('express');
const { sequelize } = require('./src/config/configDB');
require('dotenv').config();
const produtoRoutes = require('./src/modules/produto/routes/produto.route');

const app = express();
const PORTA = process.env.PORT;
app.use(express.json());

app.use('/produtos', produtoRoutes);

// await sequelize.sync({ force: true })


app.listen(PORTA, ()=>{
    console.log(`aplicação rodando em http://localhost:${PORTA}`); 
})

module.exports = app;

