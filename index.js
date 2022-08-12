const express = require("express");
const con = require("./config");
const app = express();

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

app.listen(5000);
