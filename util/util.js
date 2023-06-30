const blobToFile = (theBlob, fileName)=> {       
    return new File(
        theBlob , // cast as any
        fileName, 
        {
            lastModified: new Date().getTime(),
            type: theBlob.type 
        }
    )
}
module.exports={
    blobToFile
}