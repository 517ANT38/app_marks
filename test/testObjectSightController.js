const { describe, beforeEach } = require("mocha");
const models=require("../models");
const chai = require('chai');
const chaiHttp = require('chai-http');
const fs=require("fs");
const {app} = require('../index');
const {  clearDB, createTestObjectSight } = require("../util/util");
const { objectSight,address} = models;
const path = require("path");

const res=fs.readFileSync(path.join(process.env.FOLDER_TEST_DATA,"Test.jpg"));
chai.use(chaiHttp);
const should = chai.should();

describe("ObjectSight",()=>{
    beforeEach((done)=>{
        
        clearDB(models).finally(()=>done());
        
    });
    describe("/POST objectSights",()=>{  

        it("it should POST METHOD for create objectSight....", ()=>{
            createTestObjectSight(objectSight,address,res).then(x=>{
                
                    chai.request(app)
                    .post("/api/objectSights/new")
                    .send(x)                
                    .end((e,r)=>{
                                        
                        chai.expect(r).status(200); 
                                    
                        
                    });
                 
                }
            );
           
          
        });
    });
}); 
