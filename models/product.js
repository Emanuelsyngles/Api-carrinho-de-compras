const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Product = db.define('Product', {
    Name: {
        Type: DataTypes.STRING,
    },
    marca: {
        Type: DataTypes.STRING,
    },
    newsletter: {
        type: DataTypes.BOOLEAN,
    },
})

module.exports = Product;