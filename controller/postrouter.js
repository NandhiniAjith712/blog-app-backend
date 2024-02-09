const express = require("express")
const postmodel = require("../models/postmodel")
const router = express.Router()

router.post("/add",async(req,res)=>{
    let data = req.body
    let post = new postmodel(data)
    let result = await post.save()
    res.json({
        status:"success"
    })
})

module.exports= router