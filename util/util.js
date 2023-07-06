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
const fraz=()=>(Math.random() + 10).toString(36).substring(7);

const clearDB=async (models)=>{
        await deleteFiles("./static");
        for (const key in models) {
            
            await models[key].destroy({
                where: {},
                truncate: true
              })
        }
}
async function createTestQuestion(count,id_obj,creater){
    const arr=[];
    for(let i=0;i<count;i++){
        arr.push({
            ObjectSightId:id_obj,
            text:fraz()
        });
        
    }
    await creater.bulkCreate(arr);
   
}
async function createTestObjectSight(creater,img){
    return await creater.create({
        name:"hrjekrek",
        description:"hsjfhjgfhjsgfhgshf sfhjkshfjksjkfskf",
        img:img.toString('base64'),
        address:{
            address:"safhjksdhgjkdhsjkghsdhgjk ",
            x:82.22,
            y:78.9
        }
    });
}




module.exports={
    base64ToBuffer,
    bufferToBase64,
    createNameFile,
    asyncHandler,
    clearDB,
    fraz,
    createTestObjectSight,
    createTestQuestion
}