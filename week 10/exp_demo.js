const express = require('express');
const app = express();

app.get('',  (req, res) => {

    // Get a parameter name from browser url
    // http://localhost:5000/?name=SFBU
    console.log("data sent by browser", req.query.name);
    
    res.send("Hello, this is home page", ${req});
});

app.get('/about', (req, res) => {
    res.send("This is an about page");
    console.log("about page log..")
})

app.listen(5000);
