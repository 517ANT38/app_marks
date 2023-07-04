const { describe } = require("mocha");
const db=require("../db");
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const should = chai.should();
const fs=require("fs/promises");



describe("Object sight",()=>{
    const thisDb=db.connection;

    befforeAll(async ()=>{
        await thisDb.sync({force:true});
    });
    describe("/POST Object sight create",()=>{
        it("it shold valid data",async (done)=>{
            
            chai.request(server)
            .post("/objectSights")
            .send()
        });
    })
});