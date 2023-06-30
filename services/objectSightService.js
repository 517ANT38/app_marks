module.exports=({ObjectSight,Address})=>({
    add:async(playload)=>{
        
        return await ObjectSight.create(playload);
    },
    findById:async(_id)=>{
        return await ObjectSight.findByPk(_id); 
    },
    findAll:async()=>{
        return await ObjectSight.findAll();
    },
    update:async(_id)=>{
        let res=await ObjectSight.update(payload,{where:{id:_id}});
        if(res[0]==0)
            throw new Error("ObjectSight not found");
        return res[1][0];  
    }
});