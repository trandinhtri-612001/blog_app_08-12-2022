const mysql = require("mysql");
//const Connection = require("mysql2/typings/mysql/lib/Connection.js");
const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

// var connection = mysql.createPool({
//   host: dbConfig.HOST,
//   user: dbConfig.USER,
//   password: dbConfig.PASSWORD,
//   database: dbConfig.DB,
//   port: dbConfig.PORT
// });

// module.exports = connection;


  const  Connection = ()=>{
  const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
     {
       host: dbConfig.HOST,
       dialect: 'mysql'
     }
   );
 
 sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });
}
module.exports =Connection;