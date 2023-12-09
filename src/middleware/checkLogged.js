
let checkLogged = (req, res) =>{
    let token = req.header.authorization
    if (token) {
        next()
    } else {
        return res.json({error: 'Você precisa de um token' })
    }
}

module.exports = checkLogged