module.exports=({Answer})=>({
    add:async(payload)=>{
        return await Answer.create(payload);
    },
    update:async(_id,payload)=>{
        let res=await Answer.update(payload,{where:{id:_id}});
        if(res[0]==0)
            throw new Error("Answer not found");
        return res[1][0];       
    },
    findAll:async()=>{
        return await Answer.findAll();
    },
    findById:async(_id)=>{
        return await Answer.findByPk(_id);
    }
});