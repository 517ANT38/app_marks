const db=require("./app/db");
const app = require("./app/app").app
const PORT = process.env.PORT;
const server = app.listen(PORT,()=>{
   console.log(`Simple Express app listening on port ${PORT}!`)
});

function closeApp(signal){
   db.connection.close().then(x=>{
      server.close(() => {
         console.log(`Server stop, signal ${signal}`);
      });
   }).catch(x=>console.log(x))
}

process.on('SIGTERM', (e) => closeApp(e));
process.on('SIGINT', (e) => closeApp(e));
