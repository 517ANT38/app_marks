module.exports=({user})=>({
    add:async(payload)=>{
        return await user.create(payload);
    },
    update:async(_id,payload)=>{    
        let res=await user.update(payload,{where:{id:_id}});
        if(res[0]==0)
            throw new Error("User not found");
        return res[1][0];        
    },
    findAll:async()=>{
        return await user.findAll();
    },
    findById:async(_id)=>{
        let res= await user.findByPk(_id);
        if(!res)
            throw new Error("User not found");
        return res;    
    },
    findByName:async(_name)=>{
        return await user.findAll({
            where:{
                name:_name
            }
        });
    } 
});