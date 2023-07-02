const {db}=require("../db");
const textQuery="";
// select 
// u.id "userId",
// ans."updatedAt",
// ans."stateAnswer",
// q.text "textQuery" from "Users" u 
// join "Answer" ans 
// on ans."UserId"=u.id
// join "Questions" q
// on q.id=ans."QuestionId"
// '
module.exports={
    sync:async()=>db.connection.query(`create or replace view VNameCountAnswer as ${textQuery}`),
        
    
    findAll:async()=>{
        return await db.connection.query("select id,name,count_attempts from VNameCountAnswer");
    },
    findByPk:async(_id)=>{
        return await db.connection.query("select id,name,count_attempts from VNameCountAnswer id=$1",_id);
    }
}