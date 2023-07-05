const { describe, beforeEach } = require("mocha");
const models=require("../models");
const chai = require('chai');
const chaiHttp = require('chai-http');
const fs=require("fs");

chai.use(chaiHttp);
const {app} = require('../index');
const path = require("path");
let should = chai.should();

describe("ObjectSight",()=>{
    beforeEach((done)=>{
        for (const key in models) {
            models[key].destroy({
                where: {},
                truncate: true
              }).then(x=>done());
        }
        
    });
    describe("/POST objectSights",()=>{   

           
   

        

        it("it should POST METHOD for create objectSight....", (done)=>{
            fs.readFile("D:/Test.jpg",(err,res)=>{
                
                
                chai.request(app)
                .post("/api/objectSights/new")
                .send(
                    {
                        name:"hrjekrek",
                        description:"hsjfhjgfhjsgfhgshf sfhjkshfjksjkfskf",
                        img:res.toString('base64'),
                        address:{
                            address:"safhjksdhgjkdhsjkghsdhgjk ",
                            x:82.22,
                            y:78.9
                        },

                    }
                )
                
                .end((e,r)=>{
                                      
                    chai.expect(r).status(200); 
                    r.body.should.be.a('object');                
                    done();
                });
           
            });
          
        });
    });
}); 
