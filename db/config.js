const { Sequelize ,DataTypes} = require('sequelize');
const connection=new Sequelize(
    {
        database:process.env.DB,
        username:process.env.USERNAME_DB,
        port:process.env.PORT_DB,
        dialect:process.env.DIALECT,
        password:process.env.PASSWORD_DB,
        host:process.env.HOST,
    },
    
);

connection.authenticate()
.then(x=>console.log('The connection to the database was successfully established'))
.catch(x=>console.error('Unable to connect to the database: ', x));
connection.sync()
.then(x=>console.log('The connection to the database was successfully'))   
.catch(x=>console.error('Unable to connect to the database: ', x));
 

module.exports={connection:connection,types:DataTypes}