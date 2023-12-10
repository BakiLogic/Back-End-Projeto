const express = require('express')
const router = express.Router()

const User = require('../model/user')
const Receita = require("../model/receita")
const Ingrediente = require("../model/ingrediente")

router.delete('/drop-data', async (req, res) => {
   
        await User.destroy({ where: {}})
        await Receita.destroy({ where: {}})
        await Ingrediente.destroy({ where: {}})

        res.json({msg: "DB Tomou droptable"})
})

module.exports = router