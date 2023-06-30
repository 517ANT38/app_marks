module.exports=({Question})=>({
    add:async(payload)=>{
        return await Question.create(payload);
    },
    update:async(_id,payload)=>{
        let res=await Question.update(payload,{where:{id:_id}});
        if(res[0]==0)
            throw new Error("Question not found");
        return res[1][0]; 
    },
    findAll:async()=>{
        return await Question.findAll();
    },
    delete:async(_id)=>{
        let res=await Question.findByPk(_id);
        if(!res)
            throw new Error("Question not found");
        await res.destroy();
        return res;  
    },
    findById:async(_id)=>{
        let res=await Question.findByPk(_id);
        if(!res)
            throw new Error("Question not found");
        return res; 
    }
});