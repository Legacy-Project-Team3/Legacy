
var School = require("../School")
//
exports.createStudent = function (req, res) {
    // taking the information of the student thatt comes from the client side 
    const studentData = req.body
   
    // taking the id of that specific teacher 
 
    const teacherId = req.params.id
    console.log(studentData)
    console.log(teacherId)

    //save the information of the student into the data base 
    School.StudentModel.create(studentData) 
        .then(data => {       
            // after saving the data of the student 
            // use the id of the teacher and update the array of student in the teacher schema with the id that the mongoose generated 
            // when we save the data of the student    
           
            return School.TeacherModel.findByIdAndUpdate(JSON.parse(teacherId), {
                $push: {
                    Students: data
                }
            })
       
        })
        .then(()=> {
            res.status(200).send('good')
        })
        // if there is an error
        .catch((err) => {
            console.log(err)
        })
};

exports.findStudent = (req, res) => {
     let StudentName = req.body.User
     let Password = req.body.Password

    School.StudentModel.findOne({StudentName,Password}, (err, rst) => {
        if (err) res.status(403).send(err)
        res.status(200).send(rst)
    })
}

// get all the student 
exports.getStudent = (req, res) => {



}

// update student
exports.updateStudent = (req, res) => {



}

//delete student
exports.deleteStudent = (req, res) => {



}