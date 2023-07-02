const {db}=require("../db");
const question=db.connection.define('Question',
    {
        
        text:{
            type:db.types.STRING(300)
        },
        ObjectSightId:{
            unique:true,
            type:db.types.INTEGER
        }
    },
    {
        freeTableName: true,
      
    }
);

module.exports=question;
