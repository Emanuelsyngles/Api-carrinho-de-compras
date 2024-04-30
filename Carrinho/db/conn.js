const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('carrinho', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

//try {

   // sequelize.authenticate()
   // console.log('Sequelize conectado com sucesso!')

//}catch(err) {
    // console.log('Não foi possivel conectar:', error)
//}

//module.exports = sequelize

module.exports = sequelize