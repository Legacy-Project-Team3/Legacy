var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var teacher = require("./School/teacher/teacherRoute")
var student = require("./School/student/studentRouter")
var admin = require("./School/Admin/AdminRouter")
var checkPoint = require("./School/checkPoint/checkpoinRouter")
var result = require("./School/Result/ResultRouter")
var contactUs = require("./School/ContactUs/ContactUsRouter")
var Lecture = require("./School/Lecture/lectureRouter")
var Exercice = require("./School/exercice/exerciceRouter")
let app = express();

let http = require('http');
let server = http.Server(app);

const io = require("socket.io")(server, {
    cors: {
      origin: "http://localhost:4200",
      methods: ["GET", "POST"]
    }
  });
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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
var PORT = 3002;

io.on('connection', (socket) => {
  console.log('user connected');
  socket.on('message', (msg) => {
      console.log(msg);
      socket.broadcast.emit('message-broadcast', msg);
     });
});

server.listen(PORT, () => {
  console.log(`started on port: ${PORT}`);
});