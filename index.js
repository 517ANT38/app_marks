const express = require("express");
require('dotenv').config();
const bodyParser=require("body-parser");
const models=require("./models");
const controllers=require("./controllers");
const services=require("./services");


const PORT = process.env.PORT || 8080;
const router=express.Router;
const app=express();

app.use("/images",express.static(__dirname+"/static"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

for(let name in controllers){
   app.use(`/api/${name}`,controllers[name]({router,services,models}));
}



app.listen(PORT,()=>{
   console.log(`Simple Express app listening on port ${PORT}!`)
})