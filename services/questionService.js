module.exports=({question})=>({
    add:async(payload)=>{
        return await question.create(payload);
    },
    update:async(_id,payload)=>{
        let res=await question.update(payload,{where:{id:_id}});
        if(res[0]==0)
            throw new Error("Question not found");
        return res[1][0]; 
    },
    findAll:async()=>{
        return await question.findAll();
    },
    delete:async(_id)=>{
        let res=await question.findByPk(_id);
        if(!res)
            throw new Error("Question not found");
        await res.destroy();
        return res;  
    },
    findById:async(_id)=>{
        let res=await question.findByPk(_id);
        if(!res)
            throw new Error("Question not found");
        return res; 
    }
});