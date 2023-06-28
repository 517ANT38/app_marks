const {db}=require('../db');
const ObjectSight=db.connection.define('Object_Sight',
    {
        id:{
            primaryKey:true,
            autoIncrementIdentity:true,
            type:db.types.INTEGER
        },
        url_img:{
            type:db.types.STRING(80),        
        },
        description:{
            type:db.types.STRING(600)
        },
    },
    {
        freezeTableName:true
    }
);
ObjectSight.sync(); 
module.exports=ObjectSight;