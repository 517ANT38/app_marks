const createHttpError = require("http-errors");

module.exports=({objectSight,address})=>({
    add:async(playload)=>{
            const {addressP,...p}=playload;  
            let r= await address.create(addressP);
            p.AddressId=r.id;
            return await objectSight.create(p);
        
    },
    findById:async(_id)=>{
        let res= await objectSight.findByPk(_id);
        if(!res)
            throw createHttpError(404,`Object sight with id=${_id} not found`); 
    },
    findAll:async()=>{
        return await objectSight.findAll();
    },
    update:async(_id,playload)=>{
        let count = await objectSight.count({ where: { id: _id } });
        const {addressP,...p}=playload;
        if(count==0)
            throw createHttpError(404,`Object sight with id=${_id} not found`);
        let res=await objectSight.update(p,{where:{id:_id}});
        address.update(addressP,{where:{id:res[1][0].AddressId}});
        return res[1][0];  
    },
    
});