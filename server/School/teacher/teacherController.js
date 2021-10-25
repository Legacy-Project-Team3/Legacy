
var School = require("../School")
var mongoose = require('mongoose');
require("dotenv").config();
var authTeacher = require("../Athuentication/Auth")
var jwt = require("jsonwebtoken")
//

//to create teacher 
exports.createTeacher = async function(req, res) {
    const { Role, TeacherName, TeacherLastName, Email, Password, ImageUrl, Field, Phone, Experience} = req.body
    try {
        if (!(Role && TeacherName && TeacherLastName && Email && Password && ImageUrl && Field && Phone && Experience)) {
            res.status(400).send("all inputs are required")
        }
        const existingUser = await School.TeacherModel.findOne({ Email })
        if (existingUser) {
            return res.status(409).send("Teacher already exists")
        }
        let passwordHased = await authTeacher.HashPass(Password)
        console.log("here is the hashed password " + passwordHased)
        const teacher = await School.TeacherModel.create({ Role, TeacherName, TeacherLastName, Email: Email.toLowerCase(), Password: passwordHased, ImageUrl, Field, Phone, Experience})
        const token = jwt.sign(
            { teacher_id: teacher._id, Email , Role , TeacherName ,TeacherLastName,Email,ImageUrl,Field,Phone},
            process.env.TOKEN_KEY,
            {
                expiresIn: "1h"
            }
        )
        console.log("here is the token " + token)
        teacher.token = token
        res.status(201).json(teacher.token)
        console.log("check" + teacher)
    } catch (err) {
        console.log(err)
    }

};

exports.login = async (req, res) => {
    try {
        const { Email, Password } = req.body
        if (!(Email && Password)) {
            res.status(400).send("All inputs are required")
        }
        const teacher = await School.TeacherModel.findOne({ Email });
        if (teacher && (await authTeacher.comparePass(Password, teacher.Password))) {
            const token = jwt.sign(
                { teacher_id: teacher._id,Email:teacher.Email , Role:teacher.Role , TeacherName:teacher.TeacherName ,TeacherLastName:teacher.TeacherLastName,ImageUrl:teacher.ImageUrl,Field:teacher.Field,Phone:teacher.Phone },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "1h",
                }
            )
            teacher.token = token
            res.status(200).json(teacher.token)
        }
    } catch (err) {
        console.log(err)
    }
}

exports.checkTheToken = (req, res) => {
    res.status(200).send("valid token")
    }
    
// to get all the student 
exports.getAllStudent = (req, res) => {
    //take the id of the specfic teacher 
    let teacherId = req.params.id
    //find that teacher with his id 
    School.TeacherModel.findById(teacherId, (err, data) => {
        // and then take the array of student id 
        let ArrayOfStudentsId = JSON.parse(JSON.stringify(data.Students))
        // use this query ,it will look for all the id that exist in ArrayOfStudentsId that you take it from the teacher 
        School.StudentModel.find().where('_id').in(ArrayOfStudentsId).exec((err, studentData) => {
            //if there is no student send back error
            if (err) res.status(404).send(err)
            // else send all the student to the client 
            res.status(200).send(studentData)
        })
    })


}
exports.getAllTeachersAndStudent = (req, res) => {

    School.TeacherModel.find({}, (err, result) => {

        School.StudentModel.find({}, (err, result1) => {
            if (err) {
                res.status(404).send(err)
            }
            res.status(200).send([[...result], [...result1]])
            console.log([[...result], [...result1]])
        })
    })


}
exports.deleteTeacher = (req, res) => {
    let teacherId = req.params.id
    School.TeacherModel.findByIdAndRemove(teacherId, (err, result) => {
        if (err) res.status(404).send(err)
        res.status(201).send("teacher delted")


    })
}

exports.updateTeacher = (req, res) => {
    let teacherId = req.params.id
    let dataToUpdate = req.body
    School.TeacherModel.findByIdAndUpdate(teacherId, dataToUpdate, (err, result) => {
        if (err) res.status(404).send(err)
        res.status(201).send("teacher updated")

    })
}


exports.findTeacher = (req, res) => {
    condition = req.body
   console.log('cc')
    School.TeacherModel.findOne(condition, (err, rst) => {
        if (err) res.status(403).send(err)
        res.status(201).send(rst)
    })
}



exports.findAllWork = (req,res) => {
    condition = req.params.id 
    
    School.LectureModel.find({teacherId:condition},(err,lecture)=>{
        School.exerciceModel.find({teacherId:condition},(err,exercice)=>{
              School.checkPointModel.find({teacherId:condition},(err,checkPoint)=>{
                     if(err) res.status(500).send(err)
                     res.status(200).send([[...lecture],[...exercice],[...checkPoint]])
              })
        })
    })

}




