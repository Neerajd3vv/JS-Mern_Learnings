

// better way to do input validation == ZOD
// best code to understand zode library
// const express = require("express")
// // importing zod
// const zod = require("zod")
// const app = express()
// const port = 2776

// const schema = zod.array(zod.number())
// const schemanother = zod.object({
//     email: zod.string().email(),
//     password : zod.string().min(6)
// })

// //middleware
// app.use(express.json())

// app.post("/health-kidney" ,(req,res)=>{
//     const kidneys = req.body.kidneys
//     const response = schema.safeParse(kidneys)
    
//     res.send(`Total no. of kidneys : ${(kidneys.length)}`)
// })
// app.post("/validateinput",(req,res)=>{
//     // destucting the data from body
//     const {email, password} = req.body
//     const userInfo = {email , password}
//     const response = schemanother.safeParse(userInfo)    
//     res.send(response)
// })

// // global err handing middleware
// app.use((err,req,res,next)=>{
//     res.send("server mar gaya baad me aaio")
// })

// app.listen(port)
