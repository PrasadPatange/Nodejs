// Middleware in Nodejs
const express = require("express");
const reqFilter = require("./middleware");
const app = express();
// apply group of middleware on route
const route = express.Router();
route.use(reqFilter);
// //create middleware
// const reqFilter = (req,res,next) =>{
//   // console.log('reqFilter');
//   // http://localhost:5000/users?age=10
//   if (!req.query.age) {
//      res.send("Please Provide Age");
//   }else if (req.query.age < 18) {
//     res.send("You Can Not Access This Page.");
//  }
//   else{
//     next();
//   }
// }

// app.use(reqFilter);

app.get("/", (req, res) => {
  res.send("Welcome to Home Page.");
});

// Router - Level Middleware => apply on single route only
// app.get('/users',reqFilter,(req,res) =>{
//   res.send("Welcome to Users Page.");
// });

// app.get('/about',reqFilter,(req,res) =>{
//   res.send("Welcome to About Page.");
// });

app.get("/users", (req, res) => {
  res.send("Welcome to Users Page.");
});

// Apply grp of middleware in route
route.get("/about", (req, res) => {
  res.send("Welcome to About Page.");
});

route.get("/contact", (req, res) => {
  res.send("Welcome to Contact Page.");
});

// Apply grp of middleware in route
app.use("/", route);

app.listen(5000,() =>{
  console.log("Server Running...");
});

// use to apply middleware in multiple routes use 
// route.get()
// otherwise use apply 
// app.route
// above middleware only apply in about and contact Page. 