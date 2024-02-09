const express = require("express")

const usermodel = require("../models/usermodel")

const router = express.Router()

router.post("/user_entry",async(req,res)=>{

    
    let data = req.body
    //let user = new usermodel(data)
    //let result = await user.save()
    res.json({
        status:"success"
    })
})

router.get("/viewall",async(req,res)=>{
    let data = await usermodel.find()
    res.json(data)
})

module.exports= router