const question=({connection,types})=>{
    const res=connection.define('Question',
        {
            
            text:{
                type:types.STRING(300),
                allowNull:false,
                validate:{
                    len:[5,200]
                }
            },
            ObjectSightId:{
                unique:true,
                type:types.INTEGER()
            }
        },
        {
            freeTableName: true,
        
        }
    );
    res.associate=({objectSight,answer})=>{
        res.belongsTo(objectSight,{
            foreignKey:{
                allowNull:false
            }
        });
        res.hasMany(answer);
    }
    return res;
}
module.exports=question;
