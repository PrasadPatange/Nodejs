const express = require('express');
const EventEmitter = require('events'); //in-build module. EventEmitter is a class that's why we use 1st letter capital.
const app = express();
// create event Object
const event = new EventEmitter();
// event Handle here 
let count = 0;
event.on("countAPI",()=>{
    // capture event
    count++;
    console.log("event Called",count);
})


app.get("/",(req,res)=>{
    res.send("Api Called");
    // Generate Event
    // emit event
    event.emit("countAPI");
});

app.get("/search",(req,res)=>{
    res.send("Search Api Called");
    event.emit("countAPI");
});

app.get("/update",(req,res)=>{
    res.send("Update Api Called");
    event.emit("countAPI");
});

app.listen(5000,()=>{
    console.log("Server Started...");
})