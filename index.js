// Render HTML Tags and JSON Data in NodeJS :  
const express = require('express');
// to make executable
const app = express();

app.get('',(req,res) =>{
  res.send(`<h1>Welcome Folks , This is Home Page</h1>
  <a href="/about" >Go to About Page</a>
  `);
});

app.get('/about',(req,res) =>{
  // take data from queryParams : http://localhost:5000/about?name=prasad
  res.send(`
  <input type="text" placeholder="Enter Username" value="${req.query.name}" />
  <button>Click Me</button>
  <br/>
  <a href= "/">Go to Home Page</a>
  <br/>
  <a href="/help" >Go to Help Page</a>
  `);
});

app.get('/Help',(req,res) =>{
  // JSON Data
  res.send([
    {
      name : "Prasad",
      email : "prasad@gmail.com"
    },
    {
      name : "Pro",
      email : "Pro@gmail.com"
    }
  ]);
});

app.listen(5000,()=>{
  console.log("Server Started...")
})