const {db}=require('../db');
const Address = require('./Address');
const Question = require('./Question');
const ObjectSight=db.connection.define('Object_Sight',
    {
        id:{
            primaryKey:true,
            autoIncrementIdentity:true,
            type:db.types.INTEGER
        },
        urlImg:{
            type:db.types.STRING(80),        
        },
        description:{
            type:db.types.STRING(600)
        },
    },
    {
        freezeTableName:true,
        indexes:[
            {
                unique:true,
                fields:["addressId"]
            }
        ]
    }
);

module.exports=ObjectSight;