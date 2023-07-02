const address=require("./address");
const objectSight=require("./objectSight");
const question=require("./question");
const answer=require("./answer");
const user=require("./user");
const vNameCountAnswer=require("./vNameCountAnswer");
const  init_model  = require("./init");




const models={
    address,
    objectSight,
    question,
    user,
    answer,
    vNameCountAnswer
    
}
init_model(models);
module.exports=models;