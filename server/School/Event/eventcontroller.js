let mongoose =require('mongoose')
let School=require('../School.js')
exports.createEvent = async function (req, res) {

    const {title, namestudent} = req.body
    try {
        if (!(title && namestudent )) {
            res.status(400).send("all input of event is required")
        }
      
        const student = await School.EventModel.create({ title,namestudent})
       
        res.status(201).json(student)
        console.log("check" + student)
    } catch (err) {
        console.log(err)
    }
};

