
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
            addressId:{
                unique:true,
                type:types.INTEGER()
            }
        },
        {
            freezeTableName:true,
            
        }
    );
    res.associate=({address,question})=>{
        res.address=res.belongsTo(address,{
            foreignKey:{
                allowNull:false
            }
        });    
        res.hasOne(question);
    };
    return res;
}
module.exports=objectSight;