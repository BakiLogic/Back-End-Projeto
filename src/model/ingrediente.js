const Sequelize = require('sequelize')
const db = require('../db/db')



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

module.exports = Ingrediente