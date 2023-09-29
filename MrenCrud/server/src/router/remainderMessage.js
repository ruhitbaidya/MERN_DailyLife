const express = require("express");
const {setRemainderMesssageControl, getAllRemainderMessage,     deleteRemainder,
    getAllremainderMessgaeandforshow} = require("../controler/remainderMessageControl")
const remainderRouter = express.Router();


remainderRouter.post("/remainderSet", setRemainderMesssageControl)
remainderRouter.get("/findpost", getAllRemainderMessage)
remainderRouter.post("/deltemessage/:id", deleteRemainder)
remainderRouter.get("/showAllUser", getAllremainderMessgaeandforshow)
module.exports = {remainderRouter}