const express = require("express")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")

const jwtPassword = "12345"

mongoose.connect("mongodb+srv://Neeraj:K12TDTSFZKGYq4DY@cluster0.xul7h84.mongodb.net/users_data")

const user = mongoose.model("users", {username : String, password : String})


const app = express()
const port = 3690
app.use(express.json())

 async function userExists(username,password){
  let userExists = false
  const exsistingUser = await user.findOne({username: username, password: password})
  if (exsistingUser) {
      userExists = true  
  }
  return userExists
}

app.post("/signup", async (req,res)=>{
  const username = req.body.username
  const password = req.body.password
  if (! (await userExists(username,password))) {
    const anotherUser = new user({
      username: username,
      password: password,
    })
    anotherUser.save()
      
  }else{
    return res.json({msg:"user already exsit's in the databases"})
  }
  
  res.json({msg:"successfully added to database"})  
      
})

app.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  
  if (!(await userExists(username, password))) {
    return res.json({ msg: "You are not signed up" });
  } else {
    const token = jwt.sign({ username: username }, jwtPassword);
    return res.json({ token });
  }
});

app.get("/users",async(req,res)=>{
  const token = req.headers.authorization
  try {
    if(!token){
      throw new Error("missing token")
    }
    const decode = jwt.verify(token,jwtPassword)
    const username = decode.username
    const allUsersers = await user.find()
    res.json({users: allUsersers.filter((x)=>{
      if (x.username == username) {
        return  false
      }else{
        return true
      }
    })
  })
           
  } catch (error) {
    return res.status(403).json({
     msg: "invalid token"
    })
  }
})
app.listen(port,()=>{
  console.log(`This server is listening on port : ${port}`);
})








// const express = require("express");
// const jwt = require("jsonwebtoken");
// const mongoose = require("mongoose");
// const jwtPassword = "123456";

// mongoose.connect(
//   "your_mongo_url",
// );

// const User = mongoose.model("User", {
//   name: String,
//   username: String,
//   pasword: String,
// });

// const app = express();
// app.use(express.json());

// function userExists(username, password) {
//   // should check in the database
// }

// app.post("/signin", async function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "User doesnt exist in our in memory db",
//     });
//   }

//   var token = jwt.sign({ username: username }, "shhhhh");
//   return res.json({
//     token,
//   });
// });

// app.get("/users", function (req, res) {
//   const token = req.headers.authorization;
//   try {
//     const decoded = jwt.verify(token, jwtPassword);
//     const username = decoded.username;
//     // return a list of users other than this username from the database
//   } catch (err) {
//     return res.status(403).json({
//       msg: "Invalid token",
//     });
//   }
// });

// app.listen(3000);