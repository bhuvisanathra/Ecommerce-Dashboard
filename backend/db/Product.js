
const mongoose = require('mongoose');

//Defining Schema and Required Field
const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    category: String,
    userId: String,
    company: String
});

//Module
//Exporting module with required fields defined in userschema
module.exports = mongoose.model('products', productSchema);