// const MongoClient   = require('mongodb').MongoClient;
// or
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database = "e-comm";

async function getData() {
  // Use connect method to connect to the server
  let result = await client.connect();
  let db = result.db(database);
  let collection = db.collection('products');
  // Promise { <pending> } that's why
  let response = await collection.find({}).toArray();
  // to find single Data
  // let response = await collection.find({name:'M 40'}).toArray();
  console.log(response);
}

getData();