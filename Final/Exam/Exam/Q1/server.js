const mysql = require('mysql2')
const express = require('express');
const app = express()

const conn = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'root',
    database: 'FinalExamDB'
})

// Send file
app.get('', (req, res) => {
    // res.send('This is the home page')
    res.sendFile(path.join(__dirname, 'stdents.html'))
})


// app.get('/', (req, res) =>{
//     res.sendFile(path.join(__dirname, 'exp1.html'))
// })



app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname))

// get-students call
app.get('/get-students', (req, resp) => {
    conn.query('select * from Students',
        function (err, rows) {
            if (err) {
                console.log("app.get ~ err:", err)
            } else {
                rows.forEach(element => {
                    console.log("app.get ~ element:", element)
                });

            }
        })
})

// get-students-by-gpa call
app.get('/get-students-by-gpa', (req, resp) => {
    const minGPA = req.query.min;
    const maxGPA = req.query.max;

    conn.query('select * from Students where GPA>? and GPA<? order by GPA DESC', [minGPA, maxGPA],
        function (err, rows) {
            if (err) {
                console.log("app.get ~ err:", err)
            } else {
                console.log("app.get ~ rows:", rows)
                let html = '<ol>'
                for (let i = 0; i < rows.length; i++) {
                    const element = rows[i];
                    html += `<li> ${element.StudentName} =  ${element.GPA} </li>`;
                }
                html += '</ol>'
                resp.send(html)
            }
        })
})

// create-student call
app.post('/create-student', function (req, res) {
    const student = req.body;
    console.log('from data', student);

    conn.query('insert into Students(StudentName,GPA) values(?,?)',
        [student.name, student.gpa], function (err, result) {
            console.log("~ result:", result)
            if (err) {
                console.log("~ err:", err)
            } else {
                res.send(`~ inserted student with ID: ${result.insertId}`)
            }
        })
})

app.listen(3000, () => { console.log('server is up'); })
