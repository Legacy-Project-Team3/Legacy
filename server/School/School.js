// This is the model

var mongoose = require('mongoose');
const db = require('../db/index.js');
mongoose.Promise = global.Promise;


//
//this the admin to create his account
var adminSchema = mongoose.Schema({
  User: { type: String, unique: true, required: true },
  Password: { type: String, required: true },
  Email: { type: String, unique: true, required: true },
  ImageUrl: { type: String, required: true },

}, {
  timestamps: true
})

var AdminModel = mongoose.model("ADMIN", adminSchema)

///admin model 
var contactUsSchema = mongoose.Schema({
  Name: { type: String },
  Email: { type: String },
  Subject: { type: String },
  Message: { type: String },

}, {
  timestamps: true
})

/// contact us model 
var contactUsModel = mongoose.model("contactUs", contactUsSchema)




// this for the admin after he create his account know he can add a teacher 
var createTeacherSchema = mongoose.Schema({
  TeacherName: { type: String, required: true },
  TeacherLastName: { type: String, required: true },
  Password: { type: String, required: true },
  ImageUrl: { type: String, required: true },
  Email: { type: String, unique: true, required: true },
  Field: { type: String, required: true },
  Phone: { type: String, required: true },
  Experience: { type: String, required: true },
  Students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "student"
  }],

  Quiz: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Quiz"
  }]
  ,

  Lecture: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lecture"
  }]
  ,

  Exercice: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exercice"
  }]
}, {
  timestamps: true
});
//// teacher model 
var TeacherModel = mongoose.model("teacher", createTeacherSchema)




// this schema has relation to the teacher ***one teacher has many student***
var createStudentSchema = mongoose.Schema({
  ImageUrl: { type: String, required: true },
  StudentName: { type: String, required: true },
  StudentLastName: { type: String, required: true },
  Age: { type: Number, required: true },
  Phone: { type: Number, required: true },
  Email: { type: String, unique: true, required: true },
  Password: { type: String, required: true },
  teacherId: String,
  Teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teacher"
  }
  ,
  Result: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Result"
  }]

},
  {
    timestamps: true
  })
var StudentModel = mongoose.model("student", createStudentSchema)





// checkpoint Schema 
var createCheckPoint = mongoose.Schema({
  quizArray: { type: Array, "default": [] },
  name: String,
  teacherId: String,
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teacher"
  }
},
  {
    timestamps: true
  }
)

// checkpoint model
var checkPointModel = mongoose.model("Quiz", createCheckPoint)





// lecture schema
var createLecture = mongoose.Schema({

  Lecture: String,
  LectureName: String,
  teacherId: String,
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teacher"
  }
}, { timestamps: true })


// lecture model
var LectureModel = mongoose.model("Lecture", createLecture)



// exercice schema 
var createExercice = mongoose.Schema({
  Exercice: { type: Array, "default": [] },
  name: {type:String, unique:true },
  teacherId: String,
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teacher"
  }


}, { timestamps: true })
// exercice model
var exerciceModel = mongoose.model("Exercice", createExercice)




//result Schema 
var resultSchema = mongoose.Schema({
  QzResult: { type: Number },
  Student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "student"
  }
}, {
  timestamps: true
})
//result quiz model
var ResultModel = mongoose.model("Result", resultSchema)

module.exports = {
  AdminModel,
  contactUsModel,
  TeacherModel,
  StudentModel,
  checkPointModel,
  LectureModel,
  ResultModel,
  exerciceModel
};
