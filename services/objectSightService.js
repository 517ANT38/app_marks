module.exports=({objectSight})=>({
    add:async(playload)=>{
        
        return await objectSight.create(playload);
    },
    findById:async(_id)=>{
        return await objectSight.findByPk(_id); 
    },
    findAll:async()=>{
        return await objectSight.findAll();
    },
    update:async(_id)=>{
        let res=await objectSight.update(payload,{where:{id:_id}});
        if(res[0]==0)
            throw new Error("ObjectSight not found");
        return res[1][0];  
    }
});