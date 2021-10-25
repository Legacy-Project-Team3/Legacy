var School = require("../School")

// class creation 
exports.createClass = (req,res) =>{
    let teacherId = req.params.id;
    let name = req.body.name
    let level = req.body.level
    School.classModel.create({teacherId,name,level})
    .then(data =>{
        return School.TeacherModel.findByIdAndUpdate(teacherId,{
            $push : {
                Class : data
            }
        })
    }).then(_=> {
        res.status(201).send()
    }).catch(err =>{
        res.status(404).send(err)
    })
}
exports.getClass = (req,res) =>{
    var teacherId = req.params.id.replace('"','')

    School.classModel.find({teacherId: JSON.parse(teacherId)},(err,rst)=> {
        if(err) res.status(500).send(err)
        res.status(200).send(rst)
    })
}

exports.allClass = (req,res) => {
    School.classModel.find({},(err,result) =>{
        if(err) res.status(500).send(err)
           res.status(200).send(result)
    })
}

exports.deleteClass = (req,res) => {
    var condition = {name : req.params.id}
    School.classModel.deleteOne(condition,(err,rst)=>{
         if(err) res.status(403).send(200)
         res.status(200).send(rst)
    })
 
 }