const {asyncHandler} = require('../util/util');
module.exports=({router,services,models})=>{
    const routers=router();
    const service=services.question(models);
    routers.get("/",asyncHandler(async(req,res,next)=>{
        const data = await service.findAll();
        res.send(data);
    }));
    routers.get("/:id",asyncHandler(async(req,res,next)=>{
        const data=await service.findById(req.params.id);
        res.send(data);
    }));
    routers.post("/new",asyncHandler(async(req,res,next)=>{
        const data=await service.add(req.body);
        res.send(data);
    }));
    routers.patch("/:id",asyncHandler(async(req,res,next)=>{
        const data=await service.update(req.params.id,req.body);
        res.send(data);
    }));
    routers.delete("/:id",asyncHandler(async(req,res,next)=>{
        const data=await service.delete(req.params.id);
        res.send(data);
    }));
    return routers;
};