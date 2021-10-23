let mongoose =require('mongoose')
let School=require('../School.js')
exports.createEvent = async function (req, res) {

    const {title, namestudent,teacher,date} = req.body
    try {
        if (!(title && namestudent&&teacher&&date )) {
            res.status(400).send("all input of event is required")
        }
      
        const student = await School.EventModel.create({ title,namestudent,teacher,date})
       
        res.status(201).json(student)
        console.log("check" + student)
    } catch (err) {
        console.log(err)
    }
};

exports.createEvent = async function (req, res) {

    const {title, namestudent,teacher,date} = req.body
   School.EventModel.create(req.body)
   .then((data)=>{
       res.status(200).send(data)
   })
   .catch((err)=>{
       console.log(err)
   })
};
exports.getEvent = async function (req, res) {

    const {title, namestudent,teacher,date} = req.body
    School.EventModel.find({}).populate('teacher')
    .then((data)=>{
        res.status(200).send(data)
    })
    .catch((err)=>
    res.send(err))
    
};
