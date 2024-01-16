const express = require("express")
const cors = require("cors")

const app = express()
const port = 3066
app.use(cors())
app.get("/to-do" ,(req,res)=>{
    const task = req.query.task
    const description = req.query.description
    res.json({
        tasks : task,
        about : description
    })

})

app.listen(port, ()=>{
    console.log(`This server is listening on port : ${port}`);
})