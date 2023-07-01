const {db}=require("../db");
const answer=db.connection.define(
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

module.exports=answer;