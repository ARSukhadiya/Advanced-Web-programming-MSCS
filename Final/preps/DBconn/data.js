const mysql = require('mysql2')

const conn = mysql.createConnection({
    host: "localhost",
    // host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "sakila"
});

conn.connect(function(err){
    if(err){
        console.log("Error connecting to mysql: ", err);
    }
    else{
        console.log("Connection established");
    }
});

