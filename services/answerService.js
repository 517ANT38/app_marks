const createHttpError = require("http-errors");

module.exports=({answer})=>({
    add:async(payload)=>{
        return await answer.create(payload);
    },
    update:async(_id,payload)=>{
        let res=await answer.update(payload,{where:{id:_id}});
        if(res[0]==0)
            throw createHttpError(`Answer with ${_id} not found`);
        return res[1][0];       
    },
    findAll:async()=>{
        return await answer.findAll();
    },
    findById:async(_id)=>{
        let res= await answer.findByPk(_id);
        if(!res)
            throw createHttpError(`Answer with ${_id} not found`);
        return res;
    }
});