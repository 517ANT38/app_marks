const { describe } = require("mocha");
const db=require("../db");
let chai = require('chai');
let chaiHttp = require('chai-http');


chai.use(chaiHttp);
let {app} = require('../index');


describe("",()=>{
    beforeEach((done)=>{
        db.connection.sync({force:true}).then(x=>done());
        
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
                
                done();
            })
     
        });
          
    });
});
  
