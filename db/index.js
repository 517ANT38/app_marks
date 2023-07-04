const { Sequelize ,DataTypes} = require('sequelize');
const config=require("./config");
console.log(process.env.NODE_ENV)
const NODE_ENV=process.env.NODE_ENV||"test";
console.log(config)
const connection=new Sequelize(config[NODE_ENV]);

connection.authenticate()
.then(x=>console.log('The connection to the database was successfully established'))
.catch(x=>console.error('Unable to connect to the database: ', x));
connection.sync()
.then(x=>console.log('The connection to the database was successfully'))   
.catch(x=>console.error('Unable to connect to the database: ', x));
module.exports={connection:connection,types:DataTypes}