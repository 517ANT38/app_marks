const express = require("express");
const bodyParser=require("body-parser");
const models=require("./app/models");
const controllers=require("./app/controllers");
const services=require("./app/services");
const db=require("./app/db");

const PORT = process.env.PORT;
const router=express.Router;
const app=express();
app.use((req,res,next)=>{
   res.setHeader("Access-Control-Allow-Origin","*");
   res.setHeader("Access-Control-Allow-Methods","*");
   res.setHeader("Access-Control-Allow-Headers","origin,content-type,accept");
   res.setHeader("Content-Security-Policy"," default-src *; connect-src *; script-src *; object-src *;")
   next();
});
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


const server = app.listen(PORT,()=>{
   console.log(`Simple Express app listening on port ${PORT}!`)
});

function closeApp(){
   db.connection.close().then(x=>{
      server.close(() => {
         console.log('Server stop');
      });
   })
}

process.on('SIGTERM', closeApp);
process.on('SIGINT', closeApp);
module.exports.app=app;