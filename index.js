const express = require("express");
const bodyParser=require("body-parser");
require('dotenv').config()
const PORT = process.env.PORT || 8080;
const app=express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(PORT,()=>{
   console.log(`Simple Express app listening on port ${PORT}!`)
})