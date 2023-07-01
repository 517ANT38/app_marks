const {db}=require("../db");
const address=db.connection.define(
    'Address',
    {
        
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

module.exports=address;
