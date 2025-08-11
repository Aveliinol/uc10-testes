const { DataTypes } = require("sequelize")
const { sequelize } = require("../../../config/configDB")
 
const Livro = sequelize.define(
    'Livro',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
        ,
        titulo: {
            type: DataTypes.STRING(70),
            allowNull: false,
            validate: {
                is: {
                    args: /^.{2,70}$/,
                    msg: "Título deve ter pelo menos 2 caracteres"
                }
            }
        },
        autor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ano_publicacao: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: {
                    args: [1000],
                    msg: "Ano de publicação não pode ser anterior ao ano 1000"
                },
                max: {
                    args: [2025],
                    msg: "Ano de publicação não pode ser maior que 2025"
                },
                isInt: {
                    msg: "Ano de publicação deve ser um número inteiro"
                }
            }
        },
        genero: {
            type: DataTypes.ENUM('Romance', 'Conto', 'Biografia', 'Fantasia', 'Ficção', 'Suspense', 'Terror', 'Aventura', 'Drama'),
            allowNull: false,
            validate: {
                isIn: {
                    args: [['Romance', 'Conto', 'Biografia', 'Fantasia', 'Ficção', 'Suspense', 'Terror', 'Aventura', 'Drama']],
                    msg: 'Gênero inválido'
                }
            }
        },
        preco: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                isFloat: {
                    msg: 'O campo deve ser um numero, pode ser inteiro ou variado'
                },
                numeroPositivo(value) {
                    if (value <= 0) {
                        throw new Error("Preço deve ser maior que zero")
                    }
                }
            }
        }
    },
    {
        tableName: 'livros',
        createdAt: 'criado_em',
        updatedAt: 'atualizado_em'
    }
)
 
module.exports = Livro