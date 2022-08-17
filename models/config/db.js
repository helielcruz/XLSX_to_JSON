const { Sequelize } = require('sequelize');

/**
 * Database connection
 */
const sequelize = new Sequelize('base', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
  });
  sequelize.authenticate()
  .then(() =>{
    console.log("Conexão realizada com sucesso!")
  }).catch(() =>{
    console.log("Erro, conexão com o banco de dados não foi realizada!")
  });
  
  module.exports = sequelize;