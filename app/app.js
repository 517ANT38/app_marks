const express = require("express");
const bodyParser=require("body-parser");
const models=require("./models");
const controllers=require("./controllers");
const services=require("./services");

const router=express.Router;
const app=express();
app.use((req,res,next)=>{
   res.setHeader("Access-Control-Allow-Origin","*");
   res.setHeader("Access-Control-Allow-Methods","*");
   res.setHeader("Access-Control-Allow-Headers","origin,content-type,accept");
   res.setHeader("Content-Security-Policy"," default-src *; connect-src *; script-src *; object-src *;")
   next();
});
app.use("/images",express.static(__dirname+"/imgs"));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

for(let name in controllers){
   app.use(`/api/${name}`,controllers[name]({router,services,models}));
}

app.use((err,req,res,next)=>{
   res.status(err.status||500);
   
   res.json({
      status: err.status,
      message:err.message
   });
   next();
});

module.exports.app = app;