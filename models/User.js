const user=({connection,types})=>{


    const res=connection.define(
        'User',
        {
            
            name:{
                type:types.STRING(50),
                allowNull:false,
                validate:{
                    is:/^[a-zA-Zа-яёА-ЯЁ]+$/i,
                    len:[2,50],
                    notEmpty: true
                }
            }

        },
        {
            freeTableName: true
        }
    );
    res.associate=({answer})=>{
        res.hasMany(answer);
        
    }
    return res;
}

module.exports=user;

