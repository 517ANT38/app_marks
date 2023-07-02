const asyncHandler = require('express-async-handler');
module.exports=({router,services,models})=>{
   const routers=router();
    const service=services.user(models);
    routers.get("/",async(req,res)=>{
        const data = await service.findAll();
        res.send(data);
    });
    routers.get("/name",asyncHandler(async(req,res)=>{
        const data=await service.findByName(req.params.name);
        res.send(data);
    }));
    routers.get("/:id",asyncHandler(async(req,res)=>{
        const data=await service.findById(req.params.id);
        res.send(data);
    }));
    routers.post("/new",asyncHandler(async(req,res)=>{
        console.log(req.body)
        const data=await service.add(req.body);
        res.send(data);
    }));
    routers.patch("/:id",asyncHandler(async(req,res)=>{
        const data=await service.update(req.params.id,req.body);
        res.send(data);
    }));
    
    return routers;
};