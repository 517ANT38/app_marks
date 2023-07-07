const { describe, beforeEach } = require("mocha");
const models=require("../models");
const chai = require('chai');
const chaiHttp = require('chai-http');
const {app} = require('../index');


const {  clearDB, createTestObjectSight , createTestQuestion} = require("../util/util");
const { objectSight,address,user,question,answer}=models;
chai.use(chaiHttp);


describe("Answer",()=>{

    beforeEach((done)=>{
        
        clearDB(models).finally(()=>done());
        
    });

    describe("/POST answers",()=>{
        it("it shold create answer a user",(done)=>{
            createTestDataForAnswer().then(x=>{
                chai.request(app)
                .post("/api/answers/new")
                .send(x[0])
                .end((e,r)=>{
                    chai.expect(r).status(200);
                    
                });
                done();
            });
        });
    });


    describe("/PATCH answers",()=>{
        it("it shold upadate answer a user",(done)=>{
            createTestDataForAnswer(1,true).then(x=>{
                
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
        it("it shold get all answers",(done)=>{
            createTestDataForAnswer(15,true).then(x=>{
                chai.request(app)
                .get("/api/answers")
                .end((e,r)=>{
                    chai.expect(r).status(200);
                    chai.expect(r.body).have.property("length").equal(x.length);
                });
                done();
            });
        });
        it("it shold get  by id answer",(done)=>{
            createTestDataForAnswer(15,true).then(x=>{
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

async function createTestDataForAnswer(count=1,insert=false){
    
    let objS= await createTestObjectSight(objectSight,address,null); 
    let quest=await createTestQuestion(count,objS.id,question);
    let uRes=await user.create({name:"Anton"});
    let arr=quest.map(x=>({QuestionId:x.dataValues.id,UserId:uRes.id,stateAnswer:true}));
    if(insert){
       for (let i=0;i<arr.length;i++) {
            arr[i]=await answer.create(arr[i]);
       }
       
    }
    return arr;

}