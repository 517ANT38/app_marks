const blobToBuffer = (theBlob)=> {       
    return new ArrayBuffer(theBlob)
}
const bufferToBlob=(theBuff)=>{
    return new Blob([theBuff]);
}
module.exports={
    blobToBuffer,
    bufferToBlob
}