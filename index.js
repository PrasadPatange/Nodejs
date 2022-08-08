//Template Engine ejs to make Dynamic Web Pages :  
const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname,"public");
console.log(__dirname);
console.log(publicPath);
// make express Executable
const app = express();

// set template Engine ejs
app.set('view engine','ejs');


app.get("",(_,res) =>{
  res.sendFile(`${publicPath}/index.html`);
});

// ejs file
app.get("/profile",(_,res) =>{
  const user = {
    name : "Prasad",
    email : "Prasad@gmail.com",
    skills : ['Javascript','TypeScript','Python','Angular','nodejs','nestjs','reactjs']
  }
   res.render("profile",{user});
});

app.get("/login",(_,res) =>{
   res.render("login");
});

app.get("/aboutMe",(_,res) =>{
  res.sendFile(`${publicPath}/about.html`);
});

app.get("/help",(_,res) =>{
  res.sendFile(`${publicPath}/help.html`);
});

// Error Page
app.get("*",(_,res) =>{
  res.sendFile(`${publicPath}/nopage.html`);
});


app.listen(5000,()=>{
  console.log("Server Started...")
});

