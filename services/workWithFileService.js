const fs=require("fs/promises");
const { blobToBuffer,bufferToBlob } = require("../util/util");
const { UUID } = require("sequelize");
const path = require("path");
module.exports=()=>({
    write:async(data)=>{
        let b=blobToBuffer(data);
        let uuid=new UUID().toString();
        try{
            await fs.mkdir(path.join(__dirname,"static"),{recursive:true});
            await fs.writeFileSync(`./${uuid}.bin`,b);
        }catch(err){
            console.error(err);
        }
        return uuid;
    },
    read:async(uuid)=>{
        let b=await fs.readFile(path.join(__dirname,"static",uuid,".bin"));
        return bufferToBlob(b);
    }
});