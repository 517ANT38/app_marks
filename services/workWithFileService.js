const fs=require("fs/promises");
const { base64ToBuffer,bufferToBase64,createNameFile } = require("../util/util");

const path = require("path");
const createHttpError = require("http-errors");
module.exports=({objectSight})=>({
    write:async(data)=>{
        if(!data)return "";
        
            
        let b=base64ToBuffer(data);
        let name=createNameFile(data);
        
        
        await fs.mkdir(path.join("./","static"),{recursive:true});
        await fs.writeFile(path.join("./","static",name),b);
        return name;
    },
    read:async(uuid)=>{
        let b=await fs.readFile(path.join(__dirname,"static",uuid,".jpg"));
        return bufferToBase64(b);
    },
    rewrite:async(data,_id)=>{
        try{
        const res=await objectSight.findByPk(_id);
        if(!res)
            throw createHttpError(404,`ObjectSight with id=${_id} not found`);
        if(!data || data.length==0)return res.urlImg;
    
        
        let b=base64ToBuffer(data);
        let name=createNameFile(data);   
        await fs.rename(path.join("./","static",res.urlImg),path.join("./","static",name));
        await fs.writeFile(path.join("./","static",name),b,{flag:"w"});
        return name;
        }
        catch(e){
            console.log(e);
        }
    }
});