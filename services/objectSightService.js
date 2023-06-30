module.exports=({ObjectSight,Address})=>({
    add:async(playload)=>{
        
        return await ObjectSight.create(playload);
    },
    findByPk:async(_id)=>{
         
    }
});