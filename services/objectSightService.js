const createHttpError = require("http-errors");
const {Op}=require("sequelize");
module.exports=({objectSight,address})=>({
    add:async(playload)=>{
        try{
            const {addressP,...p}=playload;   
            let r= await address.create(addressP);
            p.AddressId=r.id;
           
            return await objectSight.create(p);
        }
        catch(e){
            
            throw createHttpError(400,"Object sight bad format")
        }
            
        
    },
    findById:async(_id)=>{
        let res= await objectSight.findByPk(_id);
        if(!res)
            throw createHttpError(404,`Object sight with id=${_id} not found`); 
        return res;    
    },
    findByName:async(_name)=>{
        let res= await objectSight.findAll({
            where:{
                name:{[Op.like]:`${_name}%`}
            }
        });
        if(res.length==0){
            throw createHttpError(404,`Object sight with name=${_name} not found`)
        }
        return res;
    },

    findAll:async()=>{
        return await objectSight.findAll();
    },
    update:async(_id,playload)=>{
       
        let r = await objectSight.findByPk(_id);
        
        const {address:addressP,...p}=playload;
        if(!r)
            throw createHttpError(404,`Object sight with id=${_id} not found`);
        try{    
            for(let key in p){
                if(key!="id")
                    r[key]=p[key];
            }
            r.validate();
            await r.save();

            const aNew=address.build({...addressP,id:p.AddressId});
            await aNew.save();
        }
        catch(e){throw createHttpError(400,"Bad format object sight");}
        return r; 
        
    },
    
});