const express = require("express");
const dbConnect = require("./mongodb");
const app = express();

// to get data from postman use middleware
// before express v4.6 we use body parser but above version 
// replace this by express.json()
app.use(express.json());

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
// app.put('/',async (req,res) =>{
//     // console.log(req.body);
//     let data = await dbConnect();
//     // pass Static Data :
//     // let result = data.updateOne(
//     //     {name:"samsung J7"},
//     //     {
//     //       $set : {price:900}
//     //     }
//     //     )

//     // pass dynamic data from postman : 
//     let result = data.updateOne(
//         {name:req.body.name},
//         {
//           $set : req.body
//         }
//         )

//     res.send({result:"updated"})
// });
// through params :
// http://localhost:5000/samsung M12

app.put('/:name',async (req,res) =>{
    let data = await dbConnect();
    console.log(req.params.name);
    console.log(req.body);
    let result = await data.updateOne(
        {name:req.params.name},
        {
          $set : req.body
        }
        )

    res.send({result:"updated"})
});

app.listen(5000, () => {
  console.log("server started at http://localhost:5000/");
});
