const { Sequelize ,DataTypes} = require('sequelize');
const config=require("./config");
const p=process.argv[process.argv.length-1]||"start";
const connection=new Sequelize(config[p]);


connection.sync();
module.exports={connection:connection,types:DataTypes}