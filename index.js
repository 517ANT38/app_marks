const express = require("express");
const bodyParser=require("body-parser");
const models=require("./models");
const controllers=require("./controllers");
require('dotenv').config();

const PORT = process.env.PORT || 8080;
const router=express.Router;
const app=express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

for(let name in controllers){
   app.use(`/${name}`,controllers[name]())
}



app.listen(PORT,()=>{
   console.log(`Simple Express app listening on port ${PORT}!`)
})