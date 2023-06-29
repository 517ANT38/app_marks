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
Answer.belongsTo(User,{
    foreignKey:{
        allowNull:false
    }
});
Answer.belongsTo(Question,{
    foreignKey:{
        allowNull:false
    }
});
Answer.sync();
module.exports=Answer;