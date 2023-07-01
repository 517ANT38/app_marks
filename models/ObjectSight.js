const {db}=require('../db');
const objectSight=db.connection.define('Object_Sight',
    {
        
        urlImg:{
            type:db.types.STRING(80),        
        },
        description:{
            type:db.types.STRING(600)
        },
    },
    {
        freezeTableName:true,
        
    }
);

module.exports=objectSight;