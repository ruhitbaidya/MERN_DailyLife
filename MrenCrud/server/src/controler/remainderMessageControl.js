const { remaiderMessageModel } = require("../models/remainderMessageSchema")
const setRemainderMesssageControl = async (req, res) => {
    try {
        const { today, remainday, message } = req.body;
        if (!today || !remainday || !message) {
            return res.status(202).json({ success: true, message: "require all the fields" })
        } else {
            const setRemainder = await remaiderMessageModel({
                setDate: today,
                remainderDate: remainday,
                message: message
            }).save()
            res.status(200).json({ success: true, message: "Remainder Set Successfully", data: setRemainder })
        }
    } catch (error) {
        res.status(404).json({ success: false, message: "this is remainder router Problem" })
    }
}

const getAllRemainderMessage = async (req, res) => {
    try {
        let date = new Date();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let year = date.getFullYear();
        if (day <= 9) {
            day = '0' + day
        }
        if (month <= 9) {
            month = '0' + month
        }
        const findData = await remaiderMessageModel.find({ remainderDate: `${year}-${month}-${day}` });
        res.status(200).json({ seccuss: true, data: findData })
    } catch (error) {
        res.status(403).json({ success: true, message: "this all remainder message fetching problem" })
    }
}
const deleteRemainder = async (req, res) => {
    try {
        const {id} = req.params;
        const deleData = await remaiderMessageModel.findByIdAndDelete({_id : id})
        if(deleData){
            return res.status(200).json({success : true, message : "successfully delete"})
        }else{
            return res.status(408).json({success : false, message : "Somthing was wrong"})
        }
    } catch (error) {
         res.status(404).json({success : false, message : "route problem delete"})
    }
}
const getAllremainderMessgaeandforshow = async (req, res)=>{
    try {
        const findAllusers = await remaiderMessageModel.find();
        res.status(200).json({success : true, message : "find all users", data : findAllusers})
    } catch (error) {
        res.status(402).json({success : false, message : "this route proble all user showing"})
    }
}
module.exports = {
    setRemainderMesssageControl,
    getAllRemainderMessage,
    deleteRemainder,
    getAllremainderMessgaeandforshow
}