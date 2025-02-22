const express = require('express');
const path = require('path');
const app = express();

// route with a parameter
app.get('/user/:id', (req, res) => {
    console.log("userID: ", req.params.id)
    res.send(`User ID: ${req.params.id}`);
});

app.listen(5000);
