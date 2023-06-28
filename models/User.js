const {db}=require("../db");
const User=db.connection.define(
    'User',
    {
        id:{
            primaryKey:true,
            autoIncrementIdentity:true,
            type:db.types.INTEGER
        },
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
User.sync();
module.exports=User;

