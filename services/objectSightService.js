const createHttpError = require("http-errors");

module.exports=({objectSight})=>({
    add:async(playload)=>{
        
        return await objectSight.create(playload);
    },
    findById:async(_id)=>{
        let res= await objectSight.findByPk(_id);
        if(!res)
            throw createHttpError(404,`Object sight with id=${_id} not found`); 
    },
    findAll:async()=>{
        return await objectSight.findAll();
    },
    update:async(_id)=>{
        let res=await objectSight.update(payload,{where:{id:_id}});
        if(res[0]==0)
            throw createHttpError(404,`Object sight with id=${_id} not found`);
        return res[1][0];  
    },
    delete:async(_id)=>{
        let res=await question.findByPk(_id);
        if(!res)
            throw createHttpError(404,`Object sight with id=${_id} not found`);
        await res.destroy();
        return res;
    }
});