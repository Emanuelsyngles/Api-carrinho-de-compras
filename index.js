const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

const Product = require('./models/product')

const app = express()

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')