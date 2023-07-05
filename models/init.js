const db=require("../db");
module.exports=(models)=>{
    
    const models_init={};
    for(let item in models){
        models_init[item]=models[item](db);
        
    }
    for(let item in models_init){
        models_init[item].associate(models_init);
    }
    (async()=>{
        console.log(models_init)
        for (let item in models_init){
            await models_init[item].sync();
        }
    })();
    return models_init;
}
