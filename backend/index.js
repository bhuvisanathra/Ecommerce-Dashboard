const express = require('express');
const cors = require('cors');
require('./db/config');
const User = require('./db/user');
const Product = require('./db/Product');
const app = express();
app.use(express.json());
app.use(cors());

//Route for registration 
app.post("/register", async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
});

//Api for Login
app.post("/login", async (req, res) => {

    //Remove Password in Response
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select('-password');
        user ? res.send(user) : res.send({ 'Result': 'User Not Found' });
    } else {
        res.send({ 'Result': 'Invalid Credentials' });
    }
})

//API for Add Product
app.post("/add-product", async (req, res) => {
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result);
})


app.get("/products", async (req, res) => {
    let products = await Product.find();
    if (products.length > 0) {
        res.send(products)
    } else {
        res.send({ result: "No Product Found" });
    }
})

app.delete("/product/:id", async (req, res) => {
    const result = await Product.deleteOne({ _id: req.params.id })
    res.send(result);
})

app.get("/product/:id", async (req, res) => {
    let result = await Product.findOne({ _id: req.params.id })
    if (result) {
        res.send(result);
    } else {
        res.send({ result: "No Record Found" });
    }
})

app.put("/product/:id", async (req, res) => {
    let result = await Product.updateOne(
        //On Which bases will change the data
        { _id: req.params.id },
        //what data will change
        {
            $set: req.body
        })
    res.send(result);
})

app.get("/search/:key", async (req, res) => {
    let result = await Product.find({
        //Search to many field from one field
        "$or": [
            { name: { $regex: req.params.key } },
            { Price: { $regex: req.params.key } },
            { Company: { $regex: req.params.key } },
            { Category: { $regex: req.params.key } }
        ]
    });
    console.log(result);
    res.send(result);
})

app.listen(5000, () => {
    console.log("Server is running at http://localhost:5000");
});