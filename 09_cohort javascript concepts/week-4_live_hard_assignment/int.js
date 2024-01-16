const express = require("express")
const cors = require("cors")
const app = express()
const port = 3000


// C.O.R.S middleware- cross origin resource sharing

// app.use((req,res,next)=>{
//     res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500")
//     res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS")
//     res.header("Access-Control-Allow-Headers", "Content-Type")
//     next()
// })

// +++++++++++ or use +++++++++++++
app.use(cors())
app.get("/int", (req,res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    const c = parseInt(req.query.c)
    const int = a*b*c / 100
    const total = a+ int
    res.json({
        total: total,
        interest : int
    })
})

app.listen(port, ()=>{
    console.log(`This server is listening on port:  ${port}`);
})



