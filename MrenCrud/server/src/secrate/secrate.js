require("dotenv").config()

const port = process.env.PORT
const secratekey = process.env.SecrateKey;

module.exports = {port, secratekey}