const { describe } = require("mocha");
const db=require("../db");
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();



describe("users",()=>{
    let thisDb=db.connection;

    befforeAll(async ()=>{
        await thisDb.sync({force:true});
    });
    describe("/POST users",()=>{

        

        it("it should POST METHOD for create user with name....",(done)=>{
            
            chai.request(server)
                .post("/users/new")
                .send({name:"Anton"})
                .end((err,res)=>{
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                })
        });
        it("it should POST METHOD for create user  not name....",(done)=>{
            
            chai.request(server)
                .post("/users/new")
                .send({})
                .end((err,res)=>{
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    done();
                })
        });    
    });
    

});