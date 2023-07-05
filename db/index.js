const { Sequelize ,DataTypes} = require('sequelize');
const config=require("./config");
const p=process.argv[process.argv.length-1]||"start";
const connection=new Sequelize(config[p]);

connection.authenticate()
.then(x=>console.log('The connection to the database was successfully established'))
.catch(x=>console.error('Unable to connect to the database: ', x));
connection.sync()
.then(x=>console.log('The connection to the database was successfully'))   
.catch(x=>console.error('Unable to connect to the database: ', x));
module.exports={connection:connection,types:DataTypes}