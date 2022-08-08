
// Make HTML Pages in NodeJS :  
const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname,"public");
console.log(__dirname);
console.log(publicPath);
// make express Executable
const app = express();
// use() expressJS function
app.use(express.static(publicPath));


app.listen(5000,()=>{
  console.log("Server Started...")
})

