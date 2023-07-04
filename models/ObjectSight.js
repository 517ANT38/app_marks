
const objectSight=({connection,types})=>{
    const res=connection.define(
        'Object_Sight',
        {
            
            urlImg:{
                type:types.STRING(80),        
            },
            description:{
                type:types.STRING(600)
            },
            AddressId:{
                unique:true,
                type:types.INTEGER
            }
        },
        {
            freezeTableName:true,
            
        }
    );
    res.associate=({address,question})=>{
        res.belongsTo(address);    
        res.hasOne(question);
    };
    return res;
}
module.exports=objectSight;