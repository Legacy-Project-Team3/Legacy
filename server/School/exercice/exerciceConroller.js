var School = require('../School')
var mongoose = require('mongoose')



exports.createExercice = (req,res) => {
    const Exercice = req.body.Exercice
    const name = req.body.name 
    const teacherId = req.params.id 
    console.log({Exercice,name,teacherId})
    School.exerciceModel.create({Exercice,name,teacherId})
           .then(rst => {
               return School.TeacherModel.findByIdAndUpdate(teacherId,{
                   $push:{
                       Exercice: rst
                   }
               })
           })
           .then(()=> {
               res.status(201).send()
           })
           .catch(err=> {
               res.status(404).send(err)
           })
}



exports.allExercice = (req,res) => {
    School.ExerciceModel.find({}, (err,rst)=>{
           if(err) res.status(500).send(err)
           res.status(200).send(rst)

    })
}


exports.findExercice = (req,res) => {
    var teacherId = req.params.id.replace(' "','')  
    
    School.exerciceModel.find({teacherId: JSON.parse(teacherId)},(err,rst)=> {
        if(err) res.status(500).send(err)
        
        res.status(200).send(rst)
    })
}

exports.deleteExercice = (req,res)=>{
    condition = {name : req.params.id}
    School.exerciceModel.deleteOne(condition,(err,rst)=>{
        if(err) res.status(403).send(err)
        res.status(200).send(rst)
    })
}


