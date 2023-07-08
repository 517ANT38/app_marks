const { describe, beforeEach } = require("mocha");
const models=require("../models");
const chai = require('chai');
const chaiHttp = require('chai-http');
const fs=require("fs");
const {app} = require('../index');
const {  clearDB, createTestObjectSight, lotOfCreateTestObjs } = require("../util/util");
const { objectSight,address} = models;
const path = require("path");

const res=fs.readFileSync(path.join(process.env.FOLDER_TEST_DATA,"Test.jpg"));
chai.use(chaiHttp);


describe("ObjectSight",()=>{
    beforeEach((done)=>{
        
        clearDB(models).finally(()=>done());
        
    });
    describe("/POST objectSights",()=>{  

        it("it should POST METHOD for create objectSight....", (done)=>{
            const testDataObjS={
                name:"hrjekrek",
                description:"hsjfhjgfhjsgfhgshf sfhjkshfjksjkfskf",
                img:res,
                address:{
                    address:"safhjksdhgjkdhsjkghsdhgjk ",
                    x:82.22,
                    y:78.9
                }
            }
                
            chai.request(app)
            .post("/api/objectSights/new")
            .send(testDataObjS)                
            .end((e,r)=>{
                     
                chai.expect(r).status(201); 
                chai.expect(r.body).have.property("urlImg")
                .to.not.equal(null)
                .to.not.equals("");
                done();
                
            });
        });

        it("it should POST METHOD for create objectSight....", (done)=>{
            const testDataObjS={
                name:"",
                description:"hsjfhjgfhjsgfhgshf sfhjkshfjksjkfskf",
                img:res,
                address:{
                    address:"safhjksdhgjkdhsjkghsdhgjk ",
                    x:82.22,
                    y:78.9
                }
            }
                
            chai.request(app)
            .post("/api/objectSights/new")
            .send(testDataObjS)                
            .end((e,r)=>{
                     
                chai.expect(r).status(400); 
                
                done();
                
            });
        });



    });
    describe("/PATCH objectSights",()=>{  

        it("it should PATCH METHOD for upadate  objectSight by id", (done)=>{
            createTestObjectSight(objectSight,address,res).then(x=>{
                    
                    const testDescription="Hello world";
                    x.description=testDescription;
                    chai.request(app)
                    .patch(`/api/objectSights/${x.id}`)
                    .send(x)                
                    .end((e,r)=>{
                                     
                        chai.expect(r).status(200); 
                        chai.expect(r.body).have.property("description").be.equal(testDescription);
                        chai.expect(r.body).have.property("urlImg")
                        .be.not.equal(null)
                        .be.not.equals("");

                        
                    });
                    done();
                }
            );
        });
        it("it should PATCH METHOD for upadate  objectSight by bad id", (done)=>{
            createTestObjectSight(objectSight,address,res).then(x=>{
                  
                    const testDescription="Hello world";
                    x.description=testDescription;
                    chai.request(app)
                    .patch(`/api/objectSights/${2738}`)
                    .send(x)                
                    .end((e,r)=>chai.expect(r).status(404));                    
                    done();
                }
            );
        });
    });



    describe("/GET objectSigth",()=>{
        it("it should GET PATCH METHOD",(done)=>{
            lotOfCreateTestObjs(models).finally(()=>{
                chai.request(app)
                .get("/api/objectSights")
                .end((err,res)=>{
                    chai.expect(res).status(200);                    
                    done();
                });
            });
        });

        it("it should GET PATCH METHOD by id",(done)=>{
            createTestObjectSight(objectSight,address,res).then(x=>{
                const testDescription="Hello world";
                x.description=testDescription;
                chai.request(app)
                .get(`/api/objectSights/${x.id}`)
                .send(x)                
                .end((e,r)=>chai.expect(r).status(200));
                done();
            }
        );
        });
    });

}); 
