const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/configDB');

const LivroModel = sequelize.define(
    'Livro',
    {
     id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
     },
     titulo: {
        type: DataTypes.STRING,
        allowNull: false
     },
     autor: {
        type: DataTypes.STRING,
        allowNull: false
     },
     ano_publicacao: {
        type: DataTypes.INTEGER,
        allowNull: false
     },
     genero: {
        type: DataTypes.STRING,
        allowNull: false
     },
     preco: {
        type: DataTypes.FLOAT,
        allowNull: false
     }
    },
    {
        tableName: "livro",
        createdAt: "criado_em",
        updatedAt: "atualizado_em"
    }
);

module.exports = LivroModel;