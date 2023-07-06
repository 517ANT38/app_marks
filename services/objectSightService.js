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
        let r = await objectSight.findByPk(_id);
        const {addressP,...p}=playload;
        if(!r)
            throw createHttpError(404,`Object sight with id=${_id} not found`);
        try{    
            for(let key in p){
                if(key!="id")
                    r[key]=p[key];
            }
            await r.save();
        }
        catch(e){
            throw createHttpError(400,"Bad format object sight");
        }
        try{
            for(let key in p){
                if(key!="id")
                    r.address[key]=addressP[key];
            }
            await r.address.save();
        }catch(e){
            throw createHttpError(400,"Bad format address");
        }
        return r; 
    },
    
});