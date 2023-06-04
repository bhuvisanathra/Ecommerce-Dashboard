
const mongoose = require('mongoose');

//Defining Schema and Required Field
const productSchema = new mongoose.Schema({
    name: String,
    Price: String,
    Category: String,
    Company: String,
    userId: String
});

//Module
//Exporting module with required fields defined in userschema
module.exports = mongoose.model('products', productSchema);