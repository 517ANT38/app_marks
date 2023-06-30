module.exports=async(models)=>{
   
    models.Address.hasOne(models.ObjectSight);
    models.ObjectSight.belongsTo(models.Address,{
        foreignKey:{
            name:"addressId",
            allowNull:false
        }
    });
    models.Question.belongsTo(models.ObjectSight,{
        foreignKey:{
            name:"quetId",
            allowNull:false
        }
    });
    models.User.hasMany(models.Answer);
    models.Answer.belongsTo(models.User,{
        foreignKey:{
            allowNull:false
        }
    });
    models.Question.hasMany(models.Answer);
    models.ObjectSight.hasOne(models.Question)
    models.Answer.belongsTo(models.Question,{
        foreignKey:{
            allowNull:false
        }
    });
    for (let item in models){
        await models[item].sync();
    }
}