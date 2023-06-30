const Address=require("./Address");
const ObjectSight=require("./ObjectSight");
const Question=require("./Question");
const Answer=require("./Answer");
const User=require("./User");
const  init_model  = require("./init");




const models={
    Address,
    ObjectSight,
    Question,
    Answer,
    User
}
init_model(models);
module.exports=models;