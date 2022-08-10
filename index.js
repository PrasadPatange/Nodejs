const express = require("express");
require("./config");
const Product = require("./products");

// make app executable
const app = express();
// parse string data comming from postman into JSON
app.use(express.json());

// POST API
// http://localhost:5000/create
app.post("/create", async(req,res) =>{
    let data = new Product(req.body);
    let result = await data.save();
    // console.log(req.body);
    console.log(result);
    // res.send("Done");
    res.send(result);
});

// GET API
//http://localhost:5000/list
app.get('/list',async(req,res) =>{
    let data = await Product.find();
    console.log(data);
    res.send(data);
});

// DELETE API
// http://localhost:5000/delete/62f21a0e838fe9bd03b60ea1
app.delete('/delete/:_id',async(req,res) =>{
    console.log(req.params);
    let data = await Product.deleteOne(req.params);
    res.send(data);
});

// PUT API
// http://localhost:5000/update/62f2209a57b3e0c346f10021
app.put('/update/:_id',async(req,res) =>{
    console.log(req.params);
    let data = await Product.updateOne(
        // {} condition
        req.params,
        // data to be update
        {
            $set :req.body
        }
        );
    res.send(data);
});

app.listen(5000,()=>{
    console.log("server started...")
})