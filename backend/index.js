const express = require('express');
const cors = require('cors');
require('./db/config');
const User = require('./db/user');
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

app.listen(5000, () => {
    console.log("Server is running at http://localhost:5000");
});