// Make HTML Pages in NodeJS :  
const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname,"public");
console.log(__dirname);
console.log(publicPath);
// make express Executable
const app = express();
// use() expressJS function
// app.use(express.static(publicPath));

app.get("",(_,res) =>{
  res.sendFile(`${publicPath}/index.html`);
})

app.get("/aboutMe",(_,res) =>{
  res.sendFile(`${publicPath}/about.html`);
})

app.get("/help",(_,res) =>{
  res.sendFile(`${publicPath}/help.html`);
})

// Error Page
app.get("*",(_,res) =>{
  res.sendFile(`${publicPath}/nopage.html`);
})


app.listen(5000,()=>{
  console.log("Server Started...")
})

