// Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.
const { application } = require('express');
const express = require('express');
const multer = require('multer');

const app = express();

// Date for filename :
// let date = new Date();
// let current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();

// create function for upload => work as a middleware 

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            // cb = call back
            cb(null,"uploads");
        },
        filename: function (req, file, cb){
            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
        }
    })
}).single("user_file")

// http://localhost:5000/upload
app.post('/upload',upload,(req,res) =>{
    res.send("file Upload.");
});

app.listen(5000,()=>{
    console.log("Server Started...")
});