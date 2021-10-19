
var School = require("../School")
var mongoose = require('mongoose');
//to create teacher 
exports.createTeacher = (req, res) => {
    // taking the information for the teacher that comes from the client side 
    const teacherData = req.body

    // save the information into the data base 
    School.TeacherModel.create(teacherData)
        //if the data is saved without problem 
        .then((data) => {
            School.TeacherModel.find({}, (err, result) => {
                res.status(201).send(result)
            })

            // if there is an error
        })
        .catch((err) => {
            console.log(err)
        })

};
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




