const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true,
        unique : true
    },
    password : {
        type : String,
        require : true
    },
    answar : {
        type : String,
        require : true
    }
})

const registerModel = mongoose.model("dailyRegs", registerSchema)

module.exports = {registerModel}