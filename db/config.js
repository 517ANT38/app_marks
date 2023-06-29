const { Sequelize ,DataTypes} = require('sequelize');
const connection=new Sequelize(
    {
        database:process.env.DB,
        username:process.env.USERNAME_DB,
        port:process.env.PORT_DB,
        dialect:process.env.DIACLECT,
        password:process.env.PASSWORD_DB,
        host:process.env.HOST
    }
);
try {
    await connection.authenticate()
    console.log('The connection to the database was successfully established')
  } catch (e) {
    console.error('Unable to connect to the database: ', e)
  }

module.exports={connection,types:DataTypes}