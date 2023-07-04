
const express = require("express");

const expressOasGenerator = require('express-oas-generator');

const bodyParser=require("body-parser");
const models=require("./models");
const controllers=require("./controllers");
const services=require("./services");


const PORT = process.env.PORT || 8080;
const router=express.Router;
const app=express();
expressOasGenerator.init(app, {});
app.use("/images",express.static(__dirname+"/static"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

for(let name in controllers){
   app.use(`/api/${name}`,controllers[name]({router,services,models}));
}
app.use((err,req,res,next)=>{
   console.error(err.message);
   console.error(err.stack);
   next();
})
app.use((err,req,res,next)=>{
   res.status(err.status||500);
   res.json({
      status: err.status,
      message:err.message
   });
   next();
});


app.listen(PORT,()=>{
   console.log(`Simple Express app listening on port ${PORT}!`)
});

module.exports.app=app;