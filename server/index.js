require("dotenv").config();
var express = require('express');
var morgan = require('morgan');
const cors = require("cors");
var teacher = require("./School/teacher/teacherRoute");
var student = require("./School/student/studentRouter");
var admin = require("./School/Admin/AdminRouter");
var checkPoint = require("./School/checkPoint/checkpoinRouter");
var result = require("./School/Result/ResultRouter");
var contactUs = require("./School/ContactUs/ContactUsRouter");
var Lecture = require("./School/Lecture/lectureRouter");
var Exercice = require("./School/exercice/exerciceRouter");
var classe = require("./School/Class/classRouter");
var teacher = require("./School/teacher/teacherRoute")
var student = require("./School/student/studentRouter")
var admin = require("./School/Admin/AdminRouter")
var checkPoint = require("./School/checkPoint/checkpoinRouter")
var result = require("./School/Result/ResultRouter")
var contactUs = require("./School/ContactUs/ContactUsRouter")
var Lecture = require("./School/Lecture/lectureRouter")
var Exercice = require("./School/exercice/exerciceRouter")
let Event = require('./School/Event/eventrouter')
var images = require("./School/images/imagesRouter")


var app = express();
//This will be used in authentication the route 
const session = require('express-session');
const passport = require('passport');
const {
  API_PORT
} = process.env;
// const bodyParser = require('body-parser');

const LocalStrategy = require('passport-local').Strategy;
app.use(cors())
let http = require('http');
let server = http.Server(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"]
  }
});


//midilwares
app.use(session({
  secret: 'anything',
  resave: true,
  saveUninitialized: true
}));


app.use(express.static(__dirname + '/../client/dist'));
app.use(morgan('dev'));
app.use("/", images)
app.use(morgan('dev'));
app.use(express.json())
app.use("/", teacher)
app.use("/", student)
app.use("/", admin)
app.use("/", Lecture)
app.use("/", Exercice)
app.use("/", checkPoint)
app.use("/", result)
app.use("/", Event)
app.use("/", contactUs)
app.use("/", classe)
app.get("/test", (req, res) => {
  res.send("adzazd")
})



io.on('connection', (socket) => {

  socket.on('message', (msg) => {

    socket.broadcast.emit('message-broadcast', msg);
  });
})
server.listen(API_PORT, () => {
  console.log('School-MongoDB RESTful API listening on http://localhost:' + API_PORT)
})