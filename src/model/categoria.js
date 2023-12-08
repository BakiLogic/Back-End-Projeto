const Sequelize = require('sequelize')
const db = require('../db/db')

const Categoria = db.define('ingrediente', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
    },
    nome: {
        type: Sequelize.STRING,
        unique: true,
    },
    
})
Categoria.belongsTo(Receita, { foreignKey: 'idReceita', onDelete: 'CASCADE' })
module.exports = Categoria