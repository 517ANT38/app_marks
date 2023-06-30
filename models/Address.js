const {db}=require("../db");
const ObjectSight=require("./ObjectSight");


const Address=db.connection.define(
    'Address',
    {
        id:{
            primaryKey:true,
            autoIncrementIdentity:true,
            type:db.types.INTEGER
        },
        address:{
            type:db.types.STRING
        },
        x:{
            type:db.types.DECIMAL(10,5)
        },        
        y:{
            type:db.types.DECIMAL(10,5)
        }
    }
);

module.exports=Address;
