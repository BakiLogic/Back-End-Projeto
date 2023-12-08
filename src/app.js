require('dotenv').config();
const express = require("express")
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const db = require('./db/connection')

app.use('/', require('./routes/login'))

db.authenticate().then(() => {
    console.log("1")
}).catch(err => {
    console.log("0", err)
})

port = process.env.PORT


app.listen(port, function() {
    console.log('Server is running at port ' + port)
})