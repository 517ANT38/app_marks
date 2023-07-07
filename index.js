
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


app.listen(PORT,()=>{
   console.log(`Simple Express app listening on port ${PORT}!`)
});

module.exports.app=app;