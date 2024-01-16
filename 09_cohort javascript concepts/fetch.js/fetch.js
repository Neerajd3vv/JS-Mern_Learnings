
const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json())
// in memory database
const allUser = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "1234321",
    name: "Priya kumari",
  },
  {
    username: "neeraj@gmail.com",
    password: "1233069",
    name: "Neeraj dada",
  },
];

function userExists(username, password) {
 let userExists = false
  for (let i = 0; i < allUser.length; i++) {
    if (allUser[i].username == username && allUser[i].password == password) {
      userExists = true   
    }    
    
  }
  return userExists
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    res.json({
      users : allUser.filter((otherusername)=>{
        if (otherusername.username == username) {
          return false          
        }
        return true
      })
    })
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)