// const mongoose = require("mongoose")
// mongoose.connect("mongodb+srv://Neeraj:K12TDTSFZKGYq4DY@cluster0.xul7h84.mongodb.net/userdata")

// const user =  mongoose.model("users", {name : String, email: String, password: String})

// const anotheruser = new user({name : "neeraj", email:"nb@gmail.com", password: "1234",})

// anotheruser.save()


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://Neeraj:K12TDTSFZKGYq4DY@cluster0.xul7h84.mongodb.net/user_info")

const user =  mongoose.model("users", {name : String, email: String, password: String})




const anotheruser = new user({name : "neeraj", email:"nb@gmail.com", password: "1234",})

anotheruser.save()