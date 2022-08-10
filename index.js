// Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/e-comm');
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String

});

// Save data in DB
const saveInDB = async () => {
  const ProductModel = mongoose.model("products", ProductSchema);
  let data = new ProductModel({
    name: "motorolla",
    price: 500,
    brand: "moto",
    category: "mobile",
  });
  let result = await data.save(data);
  console.log(result);
};

// saveInDB(); //you want to save data just comment out

// Update data in DB
const updateInDB = async () =>{
    const ProductModel = mongoose.model("products", ProductSchema);
    let data = await ProductModel.updateOne(
        {name:"motorolla"},
        {
            $set:{price:750,name:"motoG"}
        }
    );
    console.log(data);
}

// updateInDB();  //you want to update data just comment out

// Delete data in DB
const deleteDB = async () =>{
    const ProductModel = mongoose.model("products", ProductSchema);
    let data = await ProductModel.deleteOne({name:"motoG"});
    console.log(data);
}

// deleteDB();


// Find or Search data in DB
const findInDB = async () =>{
    const ProductModel = mongoose.model("products", ProductSchema);
    // let data = await ProductModel.find();
    let data = await ProductModel.find({ name: 'samsung J7'});
    console.log(data);
}

findInDB();