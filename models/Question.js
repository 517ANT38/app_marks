const {db}=require("../db");
const question=db.connection.define('Question',
    {
        
        text:{
            type:db.types.STRING(300)
        }
    },
    {
        freeTableName: true,
      
    }
);

module.exports=question;
