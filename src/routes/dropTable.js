const express = require('express')
const router = express.Router()

const User = require('../../models/usero')
const Receita = require("../../models/receita")
const Ingrediente = require("../../models/ingredietne")

router.delete('/drop-data', async (req, res) => {
   
        await User.destroy({ where: {}})
        await Receita.destroy({ where: {}})
        await Ingrediente.destroy({ where: {}})

        res.json({msg: "DB Tomou droptable"})
})

module.exports = router