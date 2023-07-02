module.exports=async(models)=>{
   
    models.address.hasOne(models.objectSight);
    models.objectSight.belongsTo(models.address);
    models.question.belongsTo(models.objectSight,{
        foreignKey:{
            allowNull:false
        }
    });
    models.user.hasMany(models.answer);
    models.answer.belongsTo(models.user,{
        foreignKey:{
            allowNull:false
        }
    });
    models.question.hasMany(models.answer);
    models.objectSight.hasOne(models.question)
    models.answer.belongsTo(models.question,{
        foreignKey:{
            allowNull:false
        }
    });
    for (let item in models){
        await models[item].sync();
    }
}