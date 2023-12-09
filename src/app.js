require('dotenv').config();
const express = require("express")
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const db = require('./db/db')

app.use('/', require('./routes/login'))
app.use('/', require('./routes/install'))


port = process.env.PORT


app.listen(port, function() {
    console.log('Server is running at port ' + port)
})