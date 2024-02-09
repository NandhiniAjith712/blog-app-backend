const express = require("express")

const usermodel = require("../models/usermodel")

const router = express.Router()

const bcrypt = require("bcryptjs")

hashPasswordGenerator = async(pass)=>{
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}


router.post("/user_entry",async(req,res)=>{

    let{data} = {"data":req.body}
    let password = data.password
    hashPasswordGenerator(password).then(
        (hashedPassword)=>{
            console.log(hashedPassword)
            data.password=hashedPassword
            console.log(data)
            let user = new usermodel(data)
            let result =  user.save()
            res.json({
                status:"success"
            })
        }
    )   
})

router.get("/viewall",async(req,res)=>{
    let data = await usermodel.find()
    res.json(data)
})

module.exports= router