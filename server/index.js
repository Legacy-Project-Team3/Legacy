require("dotenv").config();
var express = require('express');
var morgan = require('morgan');
var teacher = require("./School/teacher/teacherRoute")
var student = require("./School/student/studentRouter")
var admin = require("./School/Admin/AdminRouter")
var checkPoint = require("./School/checkPoint/checkpoinRouter")
var result = require("./School/Result/ResultRouter")
var contactUs = require("./School/ContactUs/ContactUsRouter")
var Lecture = require("./School/Lecture/lectureRouter")
var Exercice = require("./School/exercice/exerciceRouter")
var app = express();
var cors = require("cors")

app.use(cors())
app.use(morgan('dev'));
app.use(express.json())
app.use(express.static(__dirname + '/../client/dist'));
app.use("/", teacher)
app.use("/", student)
app.use("/", admin)
app.use("/", Lecture)
app.use("/", Exercice)
app.use("/", checkPoint)
app.use("/", result)
app.use("/", contactUs)
app.get("/test",(req,res)=>{
  res.send("adzazd")
})
const { API_PORT } = process.env;

app.listen(API_PORT, function () {
  console.log('School-MongoDB RESTful API listening on http://localhost:' + API_PORT);
});
