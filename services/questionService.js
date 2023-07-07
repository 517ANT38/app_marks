const createHttpError = require("http-errors");

module.exports=({question,objectSight})=>({
    add:async(payload)=>{
        try{
            return await question.create(payload);
        }
        catch(err){
            throw createHttpError(400,"Wrong format question");
        }
    },
    update:async(_id,payload)=>{
        let res=await question.findByPk(_id);
        if(!res)
            throw createHttpError(404,`Question with id=${_id} not found`);
        for(let key in payload){
            if(key!="id")
                res[key]=payload[key];
        }
        try{
            await res.save();
        }
        catch(e){
            throw createHttpError(400,"Bad format question");
        }
        return res;    
    },
    findAll:async()=>{
        try{
        return await question.findAll({include:objectSight});
        }catch(e){console.log(e)}
    },
   
    findById:async(_id)=>{
        let res=await question.findByPk(_id,{include:objectSight});
        if(!res)
            throw createHttpError(404,`Question with id=${_id} not found`);
        return res; 
    }
});