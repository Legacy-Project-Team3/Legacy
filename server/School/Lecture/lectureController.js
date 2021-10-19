var School = require('../School')
var mongoose = require('mongoose')
const { json } = require('body-parser')


exports.createLecture = (req,res) => {
    const Lecture = req.body.Lecture
    const teacherId = req.params.id
    const LectureName = req.body.LectureName

      School.LectureModel.create({Lecture,teacherId,LectureName})
            .then(rst => {
               return School.TeacherModel.findByIdAndUpdate(teacherId,{
                   $push:{
                       Lecture:rst 
                   }
               })
            })
            .then(()=> {
                res.status(201).send()
            })
            .catch(err => {
                console.log(err)
            })
}


exports.allLecture = (req,res) => {
    School.LectureModel.find({}, (err,rst)=>{
           if(err) res.status(500).send(err)
           res.status(200).send(rst)

    })
}



exports.findLecture = (req,res) => {
    var teacherId = req.params.id.replace(' "','')
    

    
    School.LectureModel.find({teacherId: JSON.parse(teacherId)},(err,rst)=> {
        if(err) res.status(500).send(err)
        console.log(rst)
        res.status(200).send(rst)
    })
}

exports.deleteLecture = (req,res)=>{
    condition = {LectureName : req.params.id}
    School.LectureModel.deleteOne(condition,(err,rst)=>{
        if(err) res.status(403).send(err)
        res.status(200).send(rst)
    })
}
