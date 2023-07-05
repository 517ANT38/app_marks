const { randomUUID } = require("crypto");

const blobToBuffer = (theBlob)=> {       
    return new ArrayBuffer(theBlob)
}
const bufferToBlob=(theBuff)=>{
    return new Blob([theBuff]);
};
const fileExtensions=new Map();
fileExtensions.set("image/jpeg",".jpg");
fileExtensions.set("image/png",".png");
fileExtensions.set("image/gif",".gif");
fileExtensions.set("none",".bin");
const createNameFile=(blob)=>{
    const r=fileExtensions.get(blob?.type);
    if(r==null)r=fileExtensions.get("none");
    let uuid=randomUUID();
    return uuid+r;
}
const asyncHandler=func => async (req, res, next) => {
    try {
        await func(req, res, next);
    } catch (error) {
        console.log(error)
        next(error);
    }
};

module.exports={
    blobToBuffer,
    bufferToBlob,
    createNameFile,
    asyncHandler
}