const express = require('express');
const app = express();

//Use to make APIs
app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(5000, () => {
    console.log("Server is running at http://localhost:5000");
});