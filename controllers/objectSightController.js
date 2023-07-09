
const asyncHandler = require("express-async-handler");
module.exports=({router,services,models})=>{
    const routers=router();
    const service=services.objectSight(models);
    const serviceFile=services.workFile();
    routers.get("/",asyncHandler(async(req,res)=>{
        const data = await service.findAll();
        res.send(data);
    }));
    routers.get("/:id",asyncHandler(async(req,res)=>{
        const data=await service.findById(req.params.id);
        res.send(data);
    }));
    routers.get("/name/:name",asyncHandler(async (req,res)=>{
        const data=await service.findByName(req.params.name);
        res.send(data);
    }));
    routers.post("/new",asyncHandler(async(req,res)=>{
      
        const {img,...d}=req.body;
        
        const name=await serviceFile.write(img);
        
        d.urlImg=name;
        const data=await service.add(d);
        res.status(201).send(data);
    }));
    routers.patch("/:id",asyncHandler(async(req,res)=>{
        const data=await service.update(req.params.id,req.body);
        res.send(data);
    }));
    

    return routers;
};