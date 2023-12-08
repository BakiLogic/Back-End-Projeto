const Sequelize = require('sequelize')
const db = require('../db/db')

const Receita = db.define('receita', {
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
    tdp: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

    
})
Receita.hasMany(Ingrediente, {foreignKey: 'idReceita'})

module.exports = Receita