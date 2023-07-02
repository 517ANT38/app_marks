const fs=require("fs/promises");
const { blobToBuffer,bufferToBlob,createNameFile } = require("../util/util");

const path = require("path");
module.exports=()=>({
    write:async(data)=>{
        let b=blobToBuffer(data);
        let name=createNameFile(data);
        
        try{
            await fs.mkdir(path.join(__dirname,"static"),{recursive:true});
            await fs.writeFileSync(`./name`,b);
        }catch(err){
            console.error(err);
        }
        return name;
    },
    read:async(uuid)=>{
        let b=await fs.readFile(path.join(__dirname,"static",uuid,".jpg"));
        return bufferToBlob(b);
    }
});