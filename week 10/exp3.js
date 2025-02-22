const express = require('express');
const path = require('path');
console.log(path)
const app = express();

const publicPath = path.join(__dirname, 'nodeHTML');
console.log(publicPath)

app.get('/', (req, res) => {
    res.sendFile(`${publicPath}/about.html`);
});

app.get('/contact', (req, res) => {
    res.sendFile(`${publicPath}/contact.html`);
});

app.get('/help', (req, res) => {
    res.sendFile(`${publicPath}/help.html`);
});

app.listen(2000, ()=> {
    console.log("Server is running on port: 2000")
});
