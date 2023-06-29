const {db}=require("../db");
const Answer = require("./Answer");
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
        freeTableName: true,
        indexes:[
            {
                unique:true,
                fields:["quetId"]
            }
        ]
    }
);
Question.belongsTo(ObjectSight,{
    foreignKey:{
        name:"quetId",
        allowNull:false
    }
});
Question.hasMany(Answer);
Question.sync();
module.exports=Question;
