const express = require("express");
const con = require("./config");
const app = express();

// Parse data into json
app.use(express.json());

// GET API
app.get("/", (req, res) => {
  // res.send("Route Done");
  con.query("select * from users", (err, result) => {
    if (err) {
      res.send("Error");
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

// POST API
app.post('/',(req,res) =>{
    // res.send("Post");
    const data = req.body;
    con.query('INSERT INTO users SET ?', data, (error,result,fields) =>{
        if(error) error;
        res.send(result);
        console.log(result);
    })
})

app.listen(5000);
