const {db}=require("../db");
const Question = require("./Question");
const User = require("./User");
const Answer=db.connection.define(
    'Answer',
    {
        stateAnswer:{
            type:db.types.BOOLEAN
        }
    },
    {
        freezeTableName:true
    }
);

module.exports=Answer;