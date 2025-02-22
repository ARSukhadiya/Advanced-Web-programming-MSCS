const http = require('http')

// http.createServer((req, resp) =>{
//     resp.write("<h1>Server Demo </h1>");
//     resp.end();
// }).listen(4500);


function dataControl(req, resp){
    resp.write("<h1>Using simple function</h1>");
}
http.createServer(dataControl).listen(4500)