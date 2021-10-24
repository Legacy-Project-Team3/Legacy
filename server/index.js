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
var images = require("./School/images/imagesRouter")


var app = express();
//This will be used in authentication the route 
const session = require('express-session');
const passport = require('passport');

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
 app.use("/",images) 
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
//use passport a,d the localStrategy for checking
passport.use(new LocalStrategy(
  function(username, password, done) {
      if(username === "admin" && password === "admin"){
          return done(null, username);
      } else {
          return done("unauthorized access", false);
      }
  }
));
passport.serializeUser(function(user, done) {
  if(user) done(null, user);
});

passport.deserializeUser(function(id, done) {
  done(null, id);
});

app.use(passport.initialize());
app.use(passport.session());

app.use(session({ secret: 'anything', resave: true, saveUninitialized: true }));


const auth = () => {
    return (req, res, next) => {
        passport.authenticate('local', (error, user, info) => {
            if(error) res.status(400).json({"statusCode" : 200 ,"message" : error});
            req.login(user, function(error) {
                if (error) return next(error);
                next();
            });
        })(req, res, next);
    }
}

const isLoggedIn = (req, res, next) => {
  if(req.isAuthenticated()){
      return next()
  }
  return res.status(400).json({"statusCode" : 400, "message" : "not authenticated"})
}

app.get('/getData', isLoggedIn, (req, res) => {
  res.json("data")
});

app.post('/authenticate', auth() , (req, res) => {
  res.status(200).json({"statusCode" : 200 ,"user" : req.user});
});

const { API_PORT } = process.env;

io.on('connection', (socket) => {
  
  socket.on('message', (msg) => {
   
      socket.broadcast.emit('message-broadcast', msg);
     });
    })
server.listen(API_PORT,  ()=> {
  console.log('School-MongoDB RESTful API listening on http://localhost:' + API_PORT)
})

