const express = require('express')
const app = express()

app.use("/test",(req,res)=>{
    res.send("hello from the server")
})

app.use("/dashboard",(req,res)=>{
    res.send("hello iam from dashboard")
})

app.listen(3000,()=>{
    console.log("successfully listening...")
});