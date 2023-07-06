const fs=require("fs/promises");
const { base64ToBuffer,bufferToBase64,createNameFile } = require("../util/util");

const path = require("path");
const createHttpError = require("http-errors");
module.exports=()=>({
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
    }
});