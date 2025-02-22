// let n1 = require('./app2.js')



// console.log(n1)
// console.log('x:', n1.x)
// console.log('y:', n1.y)


const f1 = require('fs').writeFileSync;
f1.writeFileSync("exampleFile.txt", "Hello");

console.log("hey")
console.log("Directory: ", __dirname)
console.log("Filename: ", __filename)


