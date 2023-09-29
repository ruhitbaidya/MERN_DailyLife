const express = require("express");
const { registerUser, loginUser, userVerifyData } = require("../controler/basicControl");

const router = express.Router();



router.post("/register", registerUser)
router.post("/login", loginUser)
router.post("/userVerify", userVerifyData)

module.exports = {router}