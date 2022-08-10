const express = require("express");
const dbConnect = require("./mongodb");
const mongodb = require('mongodb');
const app = express();

app.use(express.json());

// get API
app.get("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
  res.send(data);
});

// store new data through API use post()
app.post("/", async (req, res) => {
  let data = await dbConnect();
  let result = await data.insertOne(req.body); //data comes from postman / angular / react etc.into nodejs
  res.send(result);
});

// put() use to update data with API
app.put('/',async (req,res) =>{
    let data = await dbConnect();
    let result = data.updateOne(
        {name:req.body.name},
        {
          $set : req.body
        }
        )

    res.send({result:"updated"})
});

// Delete Method : pass id in params to delete data
app.delete('/:id',async (req,res) =>{
    console.log(req.params.id);
    const data = await dbConnect();
    const result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    res.send(result);
})

app.listen(5000, () => {
  console.log("server started at http://localhost:5000/");
});
                                                                                                                