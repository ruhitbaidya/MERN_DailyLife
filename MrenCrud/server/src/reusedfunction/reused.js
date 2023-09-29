const bcrypt = require('bcrypt');
const saltRounds = 10;

const passwordGen =  async (passText)=>{
   try {
    const hashpass = await bcrypt.hash(passText, saltRounds);
        return hashpass
   } catch (error) {
        console.log(error)
   }
}

const passwordMatch = async (plainText, saltText)=>{
    try {
        const match = await bcrypt.compare(plainText, saltText);
        return match;
    } catch (error) {
    console.log(error)
    }
}

module.exports = {
    passwordGen,
    passwordMatch
}