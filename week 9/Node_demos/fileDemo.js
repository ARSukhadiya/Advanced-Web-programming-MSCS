// Write / create a file

const { error } = require('console');
const f = require('fs')
const path = require('path')
const dirPath = path.join(__dirname, 'crud')
const filepath = `${dirPath}/demo.txt`;

f.writeFileSync(filepath, "This is simple text file");


// Appending
f.appendFile(filepath, "\n\nThe file is updated", (err)=>{
    if(!err)console.log("File is updated!")
})

// Read a file
f.readFile(filepath, 'utf-8', (err, item) => console.log(item));

// delete a file
f.unlinkSync(filepath);
