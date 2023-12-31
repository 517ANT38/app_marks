require('dotenv').config();
module.exports={
    test:{
        database:process.env.DB_TEST,
        username:process.env.USERNAME_DB_TEST,
        port:process.env.PORT_DB_TEST,
        dialect:process.env.DIALECT_TEST,
        password:process.env.PASSWORD_DB_TEST,
        host:process.env.HOST_TEST,
        logging: false,
        timezone: '+04:00'
    },
    start:{
        database:process.env.DB,
        username:process.env.USERNAME_DB,
        port:process.env.PORT_DB,
        dialect:process.env.DIALECT,
        password:process.env.PASSWORD_DB,
        host:process.env.HOST,
        logging: false,
        timezone: '+04:00'
    },
    dock:{
        database:process.env.DB_DOCKER,
        username:process.env.USERNAME_DB_DOCKER,
        port:process.env.PORT_DB_DOCKER,
        dialect:process.env.DIALECT_DOCKER,
        password:process.env.PASSWORD_DB_DOCKER,
        host:process.env.HOST_DOCKER,
        logging: false,
        timezone: '+04:00'
    }
}