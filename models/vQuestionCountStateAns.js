const { QueryTypes } = require("sequelize");

const textQuery=`
    select 
        q.id,
        q.text,
        count(case ans."stateAnswer" when true then 1 else null end) ansGREAT,
        count(case ans."stateAnswer" when false then 1 else null end) ansBAD
    from "Questions" q
    join "Answer" ans
    on ans."QuestionId"=q.id
    group by q.id,q.text
`;

const vQuestionCountStateAns=({connection})=>{
    return {
        sync:async()=>connection.query(`create or replace view vQuestionCountStateAns as ${textQuery}`),
            
        
        findAll:async()=>{
            return await connection.query("select * from vQuestionCountStateAns",{type: QueryTypes.SELECT});
        },
        findByPkDataAnswer:async(_id)=>{
            return await connection.query("select * from vQuestionCountStateAns where id=:id",
            {
              replacements: {id:_id},
              type: QueryTypes.SELECT
            }
          );
        },
        associate:(m)=>{}
    }
}

module.exports=vQuestionCountStateAns;