const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../model/user')


router.post('/login', async (req, res) => {
    let {login, senha} = req.body
    let user = await User.findOne({ where:  { login: login}})

    if (user){
        if(user.senha = senha){
            if(user.tipo = 1){
                let payload = { id: user.id,  admin:true }
                let jwtoken = jwt.sign(payload, 'SHHHHH', { expiresIn: '24H' })
                res.json({ logged: true, mensagem: 'Login de Admin bem sucedido!', token: jwtoken })
            } else {
                let payload = { id: user.id,  admin:false }
                let jwtoken = jwt.sign(payload, 'SHHHHH', { expiresIn: '24H' })
                res.json({ logged: true, mensagem: 'Login de usuário bem sucedido!', token: jwtoken })
            }

        }
    } else {
        res.json({ logged: false, mensagem: 'Usuário ou senhas incorretas'})
    }
})

module.exports = router