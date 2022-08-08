const express = require('express');
// to make executable
const app = express();

app.get('',(req,res) =>{
  // put in browser : http://localhost:5000/?name=prasad
  // console.log("Data Sent By Browser => ",req.query);
  // Object => Data Sent By Browser =>  { name: 'prasad' }
  console.log("Data Sent By Browser => ",req.query.name);
  // name => Data Sent By Browser =>  prasad
  // res.send("Welcome Folks , This is Home Page");
  res.send("Welcome , " + req.query.name);
  // Welcome , prasad
});

app.get('/about',(req,res) =>{
  res.send("Hello , This is About Page");
});

app.get('/Help',(req,res) =>{
  res.send("Hello , This is Help Page");
});

app.listen(5000,()=>{
  console.log("Server Started...")
})