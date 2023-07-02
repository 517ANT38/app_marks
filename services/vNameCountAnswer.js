const db=require("../db");
const text_query="select u.id,u.name,count(a.id) count_attempts from Users u join Answers a on a.userId=u.id";
db.connection.query("create or replace view VNameCountAnswer as");