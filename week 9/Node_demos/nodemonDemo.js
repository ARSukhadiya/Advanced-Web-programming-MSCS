console.log("nodemon demo")

const http = require('http')
let user = require('./userDetails.json')

http.createServer((req, resp) => {
    resp.writeHead(200, {'content-Type': 'application\json'});
    resp.write(JSON.stringify(user));
    resp.write("hello");
    resp.end()
}).listen(5000);

