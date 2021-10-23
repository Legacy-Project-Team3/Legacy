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
let Event=require('./School/Event/eventrouter')
var cors = require('cors')


let app = express();
app.use(cors())
let http = require('http');
let server = http.Server(app);

const io = require("socket.io")(server, {
    cors: {
      origin: "http://localhost:4200",
      methods: ["GET", "POST"]
    }
  });
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
app.use("/", Event)
app.use("/", contactUs)
app.get("/test",(req,res)=>{
  res.send("adzazd")
})
const { API_PORT } = process.env;

io.on('connection', (socket) => {
  console.log('user connected');
  socket.on('message', (msg) => {
      console.log(msg);
      socket.broadcast.emit('message-broadcast', msg);
     });
    })
server.listen(API_PORT,  ()=> {
  console.log('School-MongoDB RESTful API listening on http://localhost:' + API_PORT)
})

