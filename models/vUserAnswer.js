
const textQuery=`
    select 
        u.id userId,
        count(ans.id) "countAnswer",
        ans."stateAnswer" ,
        q.text text
    from "Users" u
    join "Answer" ans
    on ans."UserId"=u.id
    join "Questions" q
    on q.id=ans."QuestionId"
    group by userId,text,"stateAnswer"
`;

const vUserAnswer=({connection})=>{
    return {
        sync:async()=>connection.query(`create or replace view VUserAnswer as ${textQuery}`),
            
        
        findAll:async()=>{
            return await connection.query("select * from VNameCountAnswer");
        },
        findByPkDataAnswer:async(_id)=>{
            return await connection.query("select * from VNameCountAnswer where id=$1",_id);
        },
        associate:(m)=>{}
    }
}

module.exports=vUserAnswer;