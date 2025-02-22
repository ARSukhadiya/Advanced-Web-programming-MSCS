const express = require('express');
const path = require('path');
const app = express();

// Serve the html page
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'exp1.html'))
})

// handle the route parameters from the form submission
app.get('/user', (req, res) =>{

    const userId = req.query.id;    // accessing query parameters
    const userName = req.query.name || 'Anonymous';    // default to Anonymous, if name is not provided

    console.log("User Id", userId)
    console.log("User Name", userName)
    
    res.send(`User ID: ${userId} | User Name: ${userName}`)
})

// Start the server
app.listen(5000, ()=> {
    console.log("Server is running on port:5000")
})