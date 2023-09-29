const mongoose = require("mongoose");
require("dotenv").config()
const db_connected = ()=>{
    mongoose.connect(process.env.DB_URL)
    .then(()=>{
        console.log("this database is connected")
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = {db_connected}