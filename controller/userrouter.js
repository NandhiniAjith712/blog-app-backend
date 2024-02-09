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

router.post("/signin",async(req,res)=>{
    
    let input = req.body
    let emailid = req.body.emailid
    let data = await usermodel.findOne({"emailid":emailid})
    if(!data){
        return res.json({
            status:"incorrect mailid"
        })
    }
    console.log(data)
    let dbpassword = data.password
    let inputpassword = req.body.password
    console.log(dbpassword)
    console.log(inputpassword)
    const match = await bcrypt.compare(dbpassword,inputpassword)
    if(!match){
        return res.json({
            status:"invalid password"
        })
    }
    res.json({
        status:"success"
    })

})

module.exports= router