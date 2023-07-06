const { randomUUID } = require("crypto");
const fs=require("fs/promises");
const path = require("path");
const base64ToBuffer = s=>Buffer.from(s,'base64');

const bufferToBase64=theBuff=>theBuff.toString('base64');


const createNameFile=(img)=>{
    const reg=/data:image\/[~_,\w]{2,}\;/g;
    const arr=reg.exec(img);  
    
    let uuid=randomUUID();
    if(!arr)return uuid +".bin";
    const type=arr[0].split("/")
    return uuid+"."+type;
}
const asyncHandler=func => async (req, res, next) => {
    try {
        await func(req, res, next);
    } catch (error) {
        console.log(error)
        next(error);
    }
};

const deleteFiles=async(directory)=>{
    for (const file of await fs.readdir(directory)) {
        await fs.unlink(path.join(directory, file));
    }
}


module.exports={
    base64ToBuffer,
    bufferToBase64,
    createNameFile,
    asyncHandler,
    deleteFiles
}