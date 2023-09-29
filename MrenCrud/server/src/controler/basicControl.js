const { registerModel } = require("../models/registerSchema");
const { passwordGen, passwordMatch } = require("../reusedfunction/reused");
const jwt = require("jsonwebtoken");
const {secratekey} = require("../secrate/secrate")
const registerUser = async (req, res) => {
    try {
        const { Fname, Lname, email, password, answar } = req.body;
        console.log(req.body)
        if (!Fname || !Lname || !email || !password || !answar) {
            if (!Fname) {
                return res.status(402).json({ success: false, message: "please fill Name Field" })
            }
            if (!Lname) {
                return res.status(402).json({ success: false, message: "please fill up LName Field" })
            }
            if (!email) {
                return res.status(402).json({ success: false, message: "please fill up email" })
            }
            if (!password) {
                return res.status(402).json({ success: false, message: "please fill up Password Field" })
            }
            if (!answar) {
                return res.status(402).json({ success: false, message: "please fill up Answar Field" })
            }
        } else {
            const findUser = await registerModel.findOne({ email });
            if (findUser) {
                return res.status(408).json({ success: false, message: "This email already exist" })
            } else {
                const passget = await passwordGen(password)
                await registerModel({
                    name: Fname + ' ' + Lname,
                    email: email,
                    password: passget,
                    answar: answar
                }).save()
                return res.status(202).json({ success: true, message: "successfully register this user" })
            }
        }
    } catch (error) {
        res.status(405).json({ success: false, message: "Register Router Problem" })
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            res.status(408).json({ success: false, message: "please fillup all the gap" })
        } else {
            const getUser = await registerModel.findOne({ email });
            if (getUser) {
                const match = await passwordMatch(password, getUser.password)
                if (match) {
                    const tokenGen = jwt.sign({id : getUser._id},secratekey, {expiresIn : "7d"})
                    res.status(200).json({ success: true, message: "Login Successfully", token : tokenGen })
                } else {
                    res.status(403).json({ success: false, message: "authantion faile in login match router" })
                }
            } else {
                res.status(403).json({ success: false, message: "this is invalid user" })
            }
        }

    } catch (error) {
        res.status(200).json({ success: false, message: "authantion failed" })
    }
}
const userVerifyData = async (req, res)=>{
    try {
        const header = req.body.token
        const userFind = jwt.verify(header, secratekey)
        console.log(userFind)
        const findUser = await registerModel.findById({_id : userFind.id})
        if(findUser){
            return res.status(200).json({success : true, message : "Valid User", data : {name : findUser.name, email : findUser.email}})
        }else{
            return res.status(402).json({success : false, message : "this user expaired"})
        }
    } catch (error) {
        res.status(407).json({message : "Problem is Verify User"})
    }
}
module.exports = { registerUser, loginUser, userVerifyData }