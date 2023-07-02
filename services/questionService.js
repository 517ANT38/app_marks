const createHttpError = require("http-errors");

module.exports=({question})=>({
    add:async(payload)=>{
        return await question.create(payload);
    },
    update:async(_id,payload)=>{
        let res=await question.update(payload,{where:{id:_id}});
        if(res[0]==0)
            throw createHttpError(404,`Question with id=${_id} not found`);
        return res[1][0]; 
    },
    findAll:async()=>{
        return await question.findAll();
    },
    delete:async(_id)=>{
        let res=await question.findByPk(_id);
        if(!res)
            throw createHttpError(404,`Question with id=${_id} not found`);
        await res.destroy();
        return res;  
    },
    findById:async(_id)=>{
        let res=await question.findByPk(_id);
        if(!res)
            throw createHttpError(404,`Question with id=${_id} not found`);
        return res; 
    }
});