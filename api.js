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
  // console.log(req.body);
  // res.send({name:'prasad'});
  // res.send(req.body);
  let data = await dbConnect();
//   req.body => data comes from postman / angular / react etc.into nodejs
  let result = await data.insertOne(req.body); //data comes from postman / angular / react etc.into nodejs
  res.send(result);
});
app.listen(5000, () => {
  console.log("server started at http://localhost:5000/");
});
