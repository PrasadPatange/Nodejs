// Make separate file for dbConnect
const dbConnect = require('./mongodb');

// const { MongoClient } = require("mongodb");
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);
// const database = "e-comm";

// async function dbConnect() {
//   // Use connect method to connect to the server
//   let result = await client.connect();
//   let db = result.db(database);
//   return db.collection('products');
// }

// //dbConnect() return a  Promise { <pending> }

// // 1) 1 ST METHOD TO HANDLE PROMISE :

// dbConnect().then((res) =>{
//   // console.log(res.find().toArray());
//   // return a  Promise { <pending> }
//   res.find().toArray().then((data)=>{
//     console.log("All data : ",data);
//   })
//   // res.find({name:"M 11"}).toArray().then((data)=>{
//   //   console.log("Single data : ",data);
//   // })
// })
// // console.log(dbConnect());

// // 2) 2 ND METHOD TO HANDLE PROMISE : better ways to this morden way
const main = async () =>{
  let data = await dbConnect();
      // data = await data.find({name:'M 11'}).toArray();
      data = await data.find().toArray();
      console.log(data);
}

main();