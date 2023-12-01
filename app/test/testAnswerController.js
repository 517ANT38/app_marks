const { describe, beforeEach } = require("mocha");
const models=require("../models");
const chai = require('chai');
const chaiHttp = require('chai-http');
const {app} = require('../index');


const {  clearDB, createTestDataForAnswer} = require("../util/util");
const { objectSight,address,user,question,answer}=models;
chai.use(chaiHttp);


describe("Answer",()=>{

    beforeEach((done)=>{
        
        clearDB(models).finally(()=>done());
        
    });

    describe("/POST answers",()=>{
        it("it shold POST METHOD create answer a user",(done)=>{
            createTestDataForAnswer(models).then(x=>{
                chai.request(app)
                .post("/api/answers/new")
                .send(x[0])
                .end((e,r)=>{
                    chai.expect(r).status(201);
                    
                });
                done();
            });
        });
    });


    describe("/PATCH answers",()=>{
        it("it shold PATCH METHOD upadate answer a user",(done)=>{
            createTestDataForAnswer(models,1,true).then(x=>{
                
                chai.request(app)
                .patch(`/api/answers/${x[0].id}`)
               
                .end((e,r)=>{
                    chai.expect(r).status(200);
                   
                });
                done();
            });
        });
    });

    describe("/GET answers",()=>{
        it("it shold GET METHOD find all answers",(done)=>{
            createTestDataForAnswer(models,15,true).then(x=>{
                chai.request(app)
                .get("/api/answers")
                .end((e,r)=>{
                    chai.expect(r).status(200);
                    chai.expect(r.body).have.property("length").equal(x.length);
                });
                done();
            });
        });
        it("it shold GET METHOD find  by id answer",(done)=>{
            createTestDataForAnswer(models,15,true).then(x=>{
                chai.request(app)
                .get(`/api/answers/${x[0].id}`)
                .end((e,r)=>{
                    chai.expect(r).status(200);
                   
                });
                done();
            });
        });
    });


});

