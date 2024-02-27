const { Sequelize ,DataTypes} = require('sequelize');
const config=require("./config");
const connection=new Sequelize(config);


connection.sync();
module.exports={connection:connection,types:DataTypes}