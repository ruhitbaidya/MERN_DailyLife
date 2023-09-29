const express = require("express");
const cors = require("cors");
const { router } = require("./src/router/allRouter");
const {remainderRouter} = require("./src/router/remainderMessage")
const app = express();

// api calling premission
app.use(cors())

// json data support 
app.use(express.urlencoded({extended : true}))
app.use(express.json())

// all Router control
app.use("/dailyLife", router)
app.use("/remainder/setting", remainderRouter)

module.exports = {app};