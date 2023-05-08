const mongoose = require('mongoose');

//Defining Schema and Required Field
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

//Module
//Exporting module with required fields defined in userschema
module.exports = mongoose.model('users', userSchema);