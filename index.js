const db = require("./app/db");
const app = require("./app/app").app
const PORT = process.env.PORT;
const server = app.listen(PORT,()=>{
   console.log(`Simple Express app listening on port ${PORT}!`)
});

function closeApp(signal){
   db.connection.close().then(x=>{
      server.close((err) => {
         if (err) 
            console.error('error shutdown server: %s',err.message)         
         else
            console.log(`Server stop, signal ${signal}`);
      });
   }).catch(e=>console.error('error off connect: %s',e.message))
}

process.on('SIGTERM', (s) => closeApp(s));
process.on('SIGINT', (s) => closeApp(s));
