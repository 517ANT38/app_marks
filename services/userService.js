const createHttpError = require("http-errors");
const HttpError = require("../util/httoError");

module.exports=({user})=>({
    add:async(payload)=>{
        try{
            
            return await user.create(payload);
        }
        catch(e){
            throw  createHttpError(400,"Wrong format name user");
        }
    },
    update:async(_id,payload)=>{
        try{    
            let res=await user.update(payload,{where:{id:_id}});
            if(res[0]==0)
                throw createHttpError(404,`User with id=${_id} not found`);
            return res[1][0];   
        }
        catch(e){
            throw createHttpError(400,"Wrong format name user");
        }     
    },
    findAll:async()=>{
        return await user.findAll();
    },
    findById:async(_id)=>{
        let res= await user.findByPk(_id);
        if(!res)
            throw createHttpError(404,`User with id=${_id} not found`);
        return res;    
    },
    findByName:async(_name)=>{
        let res= await user.findAll({
            where:{
                name:_name
            }
        });
        if(!res)
            throw createHttpError(404,`User with name=${_name} not found`);
        return res;
    } 
});