const { beforeEach, describe } = require("mocha");
const models=require("../models");
const chai = require('chai');
const fs=require("fs");
const {app} = require('../index');

const chaiHttp = require('chai-http');
const {   clearDB, createTestObjectSight, asyncDataForGetAll, createTestDataForUserInfoAns } = require("../util/util");
const path = require("path");

const {objectSight,address}=models;
const res=fs.readFileSync(path.join(process.env.FOLDER_TEST_DATA,"Test.jpg"));
chai.use(chaiHttp);



describe("Question",()=>{

    beforeEach((done)=>{
        
        clearDB(models).finally(()=>done());
        
    });

    describe("/POST questions",()=>{
        it(" it should POST METHOD for create question with valid data",(done)=>{          
            
            createTestObjectSight(objectSight,address,res).then(x=>{
                chai.request(app)
                .post("/api/questions/new")
                .send({
                    ObjectSightId:x.id,
                    text:"Quetion questions"
                })
                .end((err,res)=>{
                    chai.expect(res).status(201);
                    done();
                });    
            });
        }); 
        it(" it should POST METHOD for create question with wrong data",(done)=>{
           
            
            createTestObjectSight(objectSight,address,res).then(x=>{
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
    describe("/GET questions",()=>{
        it("it should GET METHOD for find all question",(done)=>{
            asyncDataForGetAll(models,10,res).finally(()=>{
                chai.request(app)
                .get("/api/questions")
                .end((err,res)=>{
                    chai.expect(res).status(200);
                    
                    done();
                });    
            });
            
        });

        it("it should GET METHOD for find by id question",(done)=>{
            asyncDataForGetAll(models,1,res).then(x=>{
                
                chai.request(app)
                .get(`/api/questions/${x[0].dataValues.id}`)
                .end((err,res)=>{
                    
                   chai.expect(res).status(200);     
                });
                done();
            });
        });

        it("it should GET METHOD for not found by id question",(done)=>{
       
            chai.request(app)
            .get(`/api/question/${718278}`)
            .end((err,res)=>{
                chai.expect(res).status(404);
                done();     
            });
           
        });
    });

    describe("/GET question info",()=>{
        it("it shold find all info question",(done)=>{
            createTestDataForUserInfoAns(models).finally(()=>{
                chai.request(app)
                .get("/api/questions/vInfoAns/all")
                .end((err,res)=>{
                    chai.expect(res).status(200);
                });
                done();
            });
        });
        it("it shold find by id info question",(done)=>{
            createTestDataForUserInfoAns(models).then(({quests})=>{
                chai.request(app)
                .get(`/api/questions/vInfoAns/${quests[0]}`)
                .end((err,res)=>{
                    chai.expect(res).status(200);
                });
                done();
            });
        });
    });



    describe("/PATCH questions",()=>{
        it("it should PATCH METHOD for find by id question",(done)=>{
            const textTest="hello world";
            asyncDataForGetAll(models,1,res).then(x=>{
                
                chai.request(app)
                .patch(`/api/questions/${x[0].dataValues.id}`)
                .send({text:textTest})
                .end((err,res)=>{
                   chai.expect(res).status(200);
                   chai.expect(res.body).have.property("text").equal(textTest); 
                   chai.expect(res.body).have.property("id").equal(x[0].dataValues.id);    
                });
                done();
            });
        });    
    });


});





