const {db}=require("../db");
const ObjectSight = require("./ObjectSight");
const Question=db.connection.define('Question',
    {
        id:{
            primaryKey:true,
            autoIncrementIdentity:true,
            type:db.types.INTEGER
        },
        text:{
            type:db.types.STRING(300)
        }
    },
    {
        freeTableName: true
    }
);
Question.hasOne(ObjectSight);
Question.sync();
module.exports=Question;
