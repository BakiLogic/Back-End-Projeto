require('dotenv').config()
const express = require("express")
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const db = require('./db/db')

db.authenticate().then(() => {
    console.log("Connected to DB")
}).catch(err => {
    console.log("Connection to DB failed", err)
})

app.use('/', require('./routes/login'))
app.use('/', require('./routes/install'))

router.get('/', (req, res)=> {
    res.render("README \n\n Projeto com foco em cadastro e manejamento de dados perante ao conceito de receitas e ingredientes culinários, com a capacidade de criar um menu com tempo de preparo e ingredientes")


})

port = process.env.PORT


app.listen(port, function() {
    console.log('Server is running at port ' + port)
})

module.exports = router