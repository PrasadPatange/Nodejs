// Middleware in Nodejs
const express = require('express');
const app = express();

//create middleware
// Applicaton-level Middleware
const reqFilter = (req,res,next) =>{
  // console.log('reqFilter');
  // http://localhost:5000/users?age=10
  if (!req.query.age) {
     res.send("Please Provide Age");
  }else if (req.query.age < 18) {
    res.send("You Can Not Access This Page.");
 }
  else{
    next();
  }
}

app.use(reqFilter);

app.get('/',(req,res) =>{
  res.send("Welcome to Home Page.");
});

app.get('/users',(req,res) =>{
  res.send("Welcome to Users Page.");
});

app.listen(5000);