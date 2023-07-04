const question=({connection,types})=>{
    const res=connection.define('Question',
        {
            
            text:{
                type:types.STRING(300)
            },
            ObjectSightId:{
                unique:true,
                type:types.INTEGER
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
