const envs = require("dotenv")
envs.config()
const {app} = require("./app");
const { db_connected } = require("./src/config/db_connections");
const port = process.env.port;

app.listen(port , (err)=>{
    db_connected()
    if(err){
        console.log(err)
    }
    console.log("this server will start successfully " +  port)
})