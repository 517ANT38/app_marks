
const objectSight=({connection,types})=>{
    const res=connection.define(
        'ObjectSight',
        {
            name:{
                type:types.STRING()
            },
            urlImg:{
                type:types.STRING(80),        
            },
            description:{
                type:types.STRING(600)
            },
            
        },
        {
            freezeTableName:true,
            
        }
    );
    res.associate=({address,question})=>{
        res.belongsTo(address,{
            foreignKey:{
                allowNull:false,
                unique:true
            }
        });    
        res.hasOne(question);
    };
    return res;
}
module.exports=objectSight;