const mongoose = require("mongoose");

const remainderSchema = new mongoose.Schema({
    setDate : {
        type : String,
        require : true
    },
    remainderDate : {
        type : String,
        require : true
    },
    message : {
        type : String,
        require : true
    }
})

const remaiderMessageModel = mongoose.model("remainderMessage", remainderSchema)

module.exports = {remaiderMessageModel}