module.exports=({User})=>({
    add:async(payload)=>{
        return await User.create((payload));
    },
    update:async(_id,payload)=>{    
        let res=await User.update(payload,{where:{id:_id}});
        if(res[0]==0)
            throw new Error("User not found");
        return res[1][0];        
    },
    findAll:async()=>{
        return await User.findAll();
    },
    findById:async(_id)=>{
        let res= await User.findByPk(_id);
        if(!res)
            throw new Error("User not found");
        return res;    
    },
    findByName:async(_name)=>{
        return await User.findAll({
            where:{
                name:_name
            }
        });
    } 
});