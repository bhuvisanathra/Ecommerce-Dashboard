const express = require('express');
require('./db/config');
const User = require('./db/user');
const app = express();
app.use(express.json())

//Route
app.post("/register", async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    res.send(result);
})

app.listen(5000, () => {
    console.log("Server is running at http://localhost:5000");
});