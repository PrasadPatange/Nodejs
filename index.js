const express = require("express");
const con = require("./config");
const app = express();

// Parse data into json or convert request body into json
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
app.post("/", (req, res) => {
  // res.send("Post");
  // Static Data :
  // const data = {
  //     name:"gajanan",
  //     password:"3030",
  //     user_type:"visitor"
  // };
  // Dynamic Data :
  const data = req.body;
  con.query("INSERT INTO users SET ?", data, (error, result, fields) => {
    if (error) throw error;
    res.send(result);
    console.log(result);
  });
});

// PUT API
app.put("/:id", (req, res) => {
  // res.send("Put API");
  // Static Data :
  // const data = ["tony","5050","Reader",4];
  // Dynamic Data :
  const data = [
    req.body.name,
    req.body.password,
    req.body.user_type,
    req.params.id,
  ];
  con.query(
    "UPDATE users SET name =? , password =? ,user_type =? WHERE id =?",
    data,
    (error, result, fields) => {
      if (error) throw error;
      res.send(result);
      console.log(result);
    }
  );
});

// DELETE API
app.delete("/:id",(req,res) =>{
    con.query("DELETE FROM users WHERE id =" + req.params.id, (error,result,fields) =>{
        if(error) throw error
        res.send(result);
    });
    // res.send(req.params.id);
    console.log(req.params.id);
})

app.listen(5000);
