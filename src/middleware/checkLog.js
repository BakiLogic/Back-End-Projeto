const jwt = require('jsonwebtoken')

let checkLogged = (req, res) =>{
    let token = req.header.authorization
    if (token) {
        jwt.verify(token, 'SHHHHH', (err) => {
            if (err) {
                return res.status(401).json({error: 'token incorreto' })
            }
            next()
        })
    } else {
        return res.json({error: 'Você precisa de um token' })
    }
}

let checkAdmin = (req, res) => {
    let token = req.headers.authorization
    
    jwt.verify(token, 'secret', (err, decoded) => {
        if (decoded.admin) {
            next()
        } else {
            return res.json({error: "token inválido para a operação"});
            
        }
    
        
    })
}

module.exports = {checkLogged, checkAdmin}