const express = require('express');
const app = express();

//MongoDb Connection
const mongoose = require('mongoose');

//ConnectDb Function
const connectDb = async () => {
    mongoose.connect("mongodb://localhost:27017/ecomm");
    //Schema
    const productSchema = new mongoose.Schema({});
    //Model : Which will only fetch the required fields
    const product = mongoose.model('product', productSchema);
    const data = await product.find();
    console.log(data);
}

connectDb();

app.listen(5000, () => {
    console.log("Server is running at http://localhost:5000");
});