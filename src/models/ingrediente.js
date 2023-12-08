const Sequelize = require('sequelize')
const db = require('../db/connection')


const Ingrediente = db.define('ingrediente', {
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
    volume: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    
})
Ingrediente.hasMany(Receita, {foreignKey: 'idIngrediente'})
module.exports = Ingrediente