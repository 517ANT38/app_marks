const { randomUUID } = require("crypto");

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

module.exports={
    base64ToBuffer,
    bufferToBase64,
    createNameFile,
    asyncHandler
}