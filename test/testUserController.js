const { describe } = require("mocha");
const models=require("../models");
const chai = require('chai');
const chaiHttp = require('chai-http');


chai.use(chaiHttp);
const {app} = require('../index');
const { clearDB } = require("../util/util");


describe("Users",()=>{
    beforeEach((done)=>{
        
        clearDB(models).finally(()=>done());
        
    });
    describe("/POST users",()=>{

        it("it should POST METHOD for create user with not name....",(done)=>{
            
            chai.request(app)
            .post("/api/users/new")
            .send({name:"534534"})
           
            .end((e,r)=>{
                chai.expect(r).status(400);                
                done();
            })
            
        });


        it("it should POST METHOD for create user with  name....",(done)=>{
            
            chai.request(app)
            .post("/api/users/new")
            .send({name:"Anton"})
            
            .end((e,r)=>{
                chai.expect(r).status(200);  
                done();
            })
     
        });
          
    });
});
  
