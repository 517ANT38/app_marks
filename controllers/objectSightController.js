const { workFile } = require("../services");

module.exports=({router,services,models})=>{
    const routers=router();
    const service=services.objectSight(models);
    const serviceFile=services.workFile();
    routers.get("/",async(req,res)=>{
        const data = await service.findAll();
        res.send(data);
    });
    routers.get("/:id",async(req,res)=>{
        const data=await service.findById(req.params.id);
        res.send(data);
    });
    routers.post("/new",async(req,res)=>{
        const {img,...d}=req.body;
        const name=await serviceFile.write(img);
        d.url_img=name;
        const data=await service.add(d);
        res.send(data);
    });
    routers.patch("/:id",async(req,res)=>{
        const data=await service.update(req.params.id,req.body);
        res.send(data);
    });
   

    return routers;
};