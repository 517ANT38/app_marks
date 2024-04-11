const db = require("./app/db");
const app = require("./app/app").app
const exit = process.exit
const PORT = process.env.PORT;
const server = app.listen(PORT,()=>{
   console.log(`Simple Express app listening on port ${PORT}!`)
});

function closeApp(signal){
   db.connection.close().then(x=>{
      server.close((err) => {
         if (err){ 
            console.error('error shutdown server: %s',err.message); 
            exit(1);
         }        
         else {
            console.log(`Server stop, signal ${signal}`);
            exit(0);
         }
      });
   }).catch(e=>{
      console.error('error off connect: %s',e.message);
      exit(1);
   })
}

process.on('SIGTERM', (s) => closeApp(s));
process.on('SIGINT', (s) => closeApp(s));
