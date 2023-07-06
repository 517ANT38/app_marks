const { beforeEach, describe } = require("mocha");
const models=require("../models");
const chai = require('chai');
const fs=require("fs");
const {app} = require('../index');

const chaiHttp = require('chai-http');
const { deleteFiles } = require("../util/util");
chai.use(chaiHttp);




describe("Question",()=>{

    beforeEach((done)=>{
        deleteFiles("./static").catch(x=>console.error(x));
        for (const key in models) {
            
            models[key].destroy({
                where: {},
                truncate: true
              }).then(x=>done());
        }
        
    });

    describe("/POST questions",()=>{
        it("create question with valid data",(done)=>{
            const res=fs.readFileSync("D:/Test.jpg");
            const {objectSight}=models;
            objectSight.create({
                name:"hrjekrek",
                description:"hsjfhjgfhjsgfhgshf sfhjkshfjksjkfskf",
                img:res.toString('base64'),
                address:{
                    address:"safhjksdhgjkdhsjkghsdhgjk ",
                    x:82.22,
                    y:78.9
                }
            }).then(x=>{
                chai.request(app)
                .post("/api/questions/new")
                .send({
                    ObjectSightId:x.id,
                    text:"Quetion questions"
                })
                .end((err,res)=>{
                    chai.expect(res).status(200);
                    done();
                });    
            });
        }); 
        it("create question with wrong data",(done)=>{
            const res=fs.readFileSync("D:/Test.jpg");
            const {objectSight}=models;
            objectSight.create({
                name:"hrjekrek",
                description:"hsjfhjgfhjsgfhgshf sfhjkshfjksjkfskf",
                img:res.toString('base64'),
                address:{
                    address:"safhjksdhgjkdhsjkghsdhgjk ",
                    x:82.22,
                    y:78.9
                }
            }).then(x=>{
                chai.request(app)
                .post("/api/questions/new")
                .send({
                    ObjectSightId:x.id,
                     
                })
                .end((err,res)=>{
                    chai.expect(res).status(400);
                    done();
                });    
            });
        }); 
    });




});