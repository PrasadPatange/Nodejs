//create middleware
module.exports =  reqFilter = (req,res,next) =>{
    // console.log('reqFilter');
    // http://localhost:5000/users?age=10
    if (!req.query.age) {
       res.send("Please Provide Age");
    }else if (req.query.age < 18) {
      res.send("You Can Not Access This Page.");
   }
    else{
      next();
    }
  }