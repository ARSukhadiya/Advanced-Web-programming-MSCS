const express = require('express')
const app = express()

// to request pages from api
app.get("", (req, res) => {
    res.send("Hi, this is home page");
});


app.get("/about", (req, res) => {
    res.send("About page");
});

app.get("/help", (req, res) => {
    res.send("Help page");
});


app.listen(5000); 