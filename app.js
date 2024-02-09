const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userrouter = require("./controller/userrouter")
const postrouter = require("./controller/postrouter")

const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://nandhini:nandhini8606@cluster0.rv1crhn.mongodb.net/userDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
}
)
app.use("/api/user",userrouter)
app.use("/api/post",postrouter)

app.listen(3001,()=>{
    console.log("Server running")
})
 