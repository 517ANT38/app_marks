const {db}=require("../db");
const user=db.connection.define(
    'User',
    {
        
        name:{
            type:db.types.STRING(50),
            allowNull:false,
            validate:{
                is:"^[a-zA-Zа-яёА-ЯЁ]+$",
                len:[2,50]
            }
        }

    },
    {
        freeTableName: true
    }
);

module.exports=user;

