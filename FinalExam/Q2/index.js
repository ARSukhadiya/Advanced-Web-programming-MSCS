const express = require('express');
const mongoose = require('mongoose')

const app = express()

mongoose.connect("mongodb+srv://admin:admin@sfbu.ahd9qrr.mongodb.net/?retryWrites=true&w=majority&appName=SFBU")


app.get('', (req, res) => {
    res.send('This is the home for Q2 page')
})

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname))

const studentSchema = new mongoose.Schema({
    name: { type: String },
    gpa: { type: Number, min: 0, max: 4 },
    birthDate: { type: Date, default: Date.now }
});

const StudentModel = mongoose.model("Student", studentSchema);

app.post('/add-student', async function (req, res) {
    const student = req.body;
    const stdData = new StudentModel({
        name: student.name,
        gpa: student.gpa,
        birthDate: student.dob
    })
    console.log('from data', student);

    const studentSaved = await stdData.save();
    console.log("🚀 ~ studentSaved:", studentSaved)

    res.send("Student was saved.");
})

app.get('/get-students', async function (req, res) {
    const conn = mongoose.connect("mongodb+srv://admin:admin@sfbu.ahd9qrr.mongodb.net/?retryWrites=true&w=majority&appName=SFBU")
    studentDatabaseTable = conn.db('test')
    const data = await studentDatabaseTable.collection('students').find().toArray()
    console.log("🚀 ~ data:", data)
    res.send(data);
})

app.get('/search-students', async function (req, res) {
    const studentName = req.body.name;
    const conn = mongoose.connect("mongodb+srv://admin:admin@sfbu.ahd9qrr.mongodb.net/?retryWrites=true&w=majority&appName=SFBU")
    studentDatabaseTable = conn.db('test')
    const data = await studentDatabaseTable.collection('students').find({ name: studentName }).toArray()
    console.log("🚀 ~ data:", data)
    res.send(data);
})

app.listen(3000, () => { console.log('server is up'); })