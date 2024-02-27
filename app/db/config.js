require('dotenv').config();
module.exports={
        database:process.env.DB_DOCKER,
        username:process.env.USERNAME_DB_DOCKER,
        port:process.env.PORT_DB_DOCKER,
        dialect:process.env.DIALECT_DOCKER,
        password:process.env.PASSWORD_DB_DOCKER,
        host:process.env.HOST_DOCKER,
        logging: false,
        timezone: '+04:00'
}
