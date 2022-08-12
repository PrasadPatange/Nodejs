const mysql = require("mysql");

const con = mysql.createConnection({
    host :'localhost',
    user : "root",
    password : "",
    database :"demo"
});

//This is Only for Connection Check. 
// con.connect((err) =>{
//     if(err){
//         console.log("Error");
//     }else{
//         console.log("Connected");
//     }
// });

// Get Data From mysql Database
con.query("select * from note",(err,result) =>{
    console.log("Result : ",result);
})