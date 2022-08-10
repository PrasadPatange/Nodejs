// Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
const mongoose = require("mongoose");

const main = async () => {
    await mongoose.connect("mongodb://localhost:27017/e-comm");
    const ProductSchema = new mongoose.Schema({
        name:String,
        price:Number
    });
    const ProductModel = mongoose.model('products',ProductSchema);
    let data = new ProductModel({name:"m8",price:1000})
    let result = await data.save(data);
    console.log(result);
}

main();
