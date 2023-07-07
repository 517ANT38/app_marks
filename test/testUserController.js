const { describe } = require("mocha");
const models=require("../models");
const chai = require('chai');
const chaiHttp = require('chai-http');


chai.use(chaiHttp);
const {app} = require('../index');
const { clearDB } = require("../util/util");
const {user}=models;

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
    describe("/PATCH  users",()=>{
        it("it should update name user by id",(done)=>{
            user.create({name:"Anton"})
            .then(x=>{
                chai.request(app)
                .patch(`/api/users/${x.id}`)
                .send({name:"Ant"})
                .end((err,res)=>{
                    chai.expect(res).status(200);
                    chai.expect(res.body).have.property("name").be.equal("Ant");
                    done();
                });
            });
        });
    
        it("it should update name user by bad id",(done)=>{
            user.create({name:"Anton"})
            .then(x=>{
                chai.request(app)
                .patch(`/api/users/${13324}`)
                .send({name:"Ant"})
                .end((err,res)=>{
                    chai.expect(res).status(404);
                    done();
                });
            });
        });
    });
    describe("/GET users",()=>{
        it("it should user by id",(done)=>{
            lotOfUsers().then(x=>{
                chai.request(app)
                .get("/api/users")
                .end((err,res)=>{
                    chai.expect(res).status(200);
                    chai.expect(res.body).have.property("length").equal(x);
                    done();
                });
            });
        });
        it("it should find user by id",(done)=>{
            user.create({name:"Anton"})
            .then(x=>{
                chai.request(app)
                .get(`/api/users/${x.id}`)
                .end((err,res)=>{
                    chai.expect(res).status(200);                   
                    done();
                });
            });
        });
        it("it should find user by name",(done)=>{
            user.create({name:"Anton"})
            .then(x=>{
                chai.request(app)
                .get(`/api/users/name/${x.name}`)
                .end((err,res)=>{
                    chai.expect(res).status(200);                   
                    done();
                });
            });
        });
        it("it should find user by bad id",(done)=>{
            user.create({name:"Anton"})
            .then(x=>{
                chai.request(app)
                .get(`/api/users/${378429}`)
                .end((err,res)=>{
                    chai.expect(res).status(404);                   
                    done();
                });
            });
        });
        it("it should find user by bad name",(done)=>{
            user.create({name:"Anton"})
            .then(x=>{
                chai.request(app)
                .get(`/api/users/name/${'Hello'}`)
                .end((err,res)=>{
                    
                    chai.expect(res).status(404);                   
                    done();
                });
            });
        });


    });
});
 

async function lotOfUsers(count=15){
    for (let index = 0; index < count; index++) {
        await user.create({name:"Anton"});
        
    }
    return count;
}
