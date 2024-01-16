const express = require("express")

const app = express()
const port = 2000

// cors middleware- cross origin resource sharing
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
app.get("/sum", (req,res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    const sum = a + b
    res.send(sum.toString())
})

app.listen(port, ()=>{
    console.log(`This server is listening on:  ${port}`);
})