const { describe } = require("mocha");
const models=require("../models");
const chai = require('chai');
const chaiHttp = require('chai-http');


chai.use(chaiHttp);
const {app} = require('../index');
const { clearDB, createTestDataForUserInfoAns, lotOfUsers } = require("../util/util");
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
                chai.expect(r).status(201);  
                done();
            })
     
        });
          
    });
    describe("/PATCH  users",()=>{
        it("it should PATCH METHOD update name user by id",(done)=>{
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
    
        it("it should PATCH METHOD update name user by bad id",(done)=>{
            user.create({name:"Anton"})
            .then(x=>{
                chai.request(app)
                .patch(`/api/users/${x.id+1}`)
                .send({name:"Ant"})
                .end((err,res)=>{
                    chai.expect(res).status(404);
                    done();
                });
            });
        });
    });
    describe("/GET users",()=>{
        it("it should GET METHOD user by id",(done)=>{
            lotOfUsers(user).then(x=>{
                chai.request(app)
                .get("/api/users")
                .end((err,res)=>{
                    chai.expect(res).status(200);
                    chai.expect(res.body).have.property("length").equal(x.length);
                    done();
                });
            });
        });
        it("it should GET METHOD find user by id",(done)=>{
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
        it("it should GET METHOD find user by name",(done)=>{
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
        it("it should GET METHOD find user by bad id",(done)=>{
            user.create({name:"Anton"})
            .then(x=>{
                chai.request(app)
                .get(`/api/users/${x.id+1}`)
                .end((err,res)=>{
                    chai.expect(res).status(404);                   
                    done();
                });
            });
        });
        it("it should GET METHOD find user by bad name",(done)=>{
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
    describe("/GET  user info answer",()=>{
        it("it shold GET METHOD find all user info answer",(done)=>{
            createTestDataForUserInfoAns(models).finally(()=>{
               
                chai.request(app)
                .get(`/api/users/userInfoAns/all`)
                .end((err,res)=>{
                    
                    chai.expect(res).status(200);
                    done();
                });
               
            });
        });
        it("it shold GET METHOD find by id user info answer",(done)=>{
            createTestDataForUserInfoAns(models).then(({users})=>{
               
                chai.request(app)
                .get(`/api/users/userInfoAns/${users[0]}`)
                .end((err,res)=>{
                    chai.expect(res).status(200);
                    
                });
                done();
            });
        });
    
        

       
    });
    
});
 


