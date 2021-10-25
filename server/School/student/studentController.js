require("dotenv").config();
var authStudent = require("../Athuentication/Auth")
var School = require("../School")
var jwt = require("jsonwebtoken")
//
exports.createStudent = async function (req, res) {

    const { User, StudentName, StudentLastName, Email, Password, Age, Phone } = req.body

    try {

        //  if(Password){
        // check the pass with regx
        //  }   
        const existingUser = await School.StudentModel.findOne({ Email })
        if (existingUser) {
            return res.status(409).send("Student is already exist ")
        }


        else {
            
            let passwordHased = await authStudent.HashPass(Password)

            
            const student = await School.StudentModel.create({ User, StudentName, StudentLastName, Email: Email, Password:passwordHased, Age, Phone })
    
            const token = jwt.sign(

                { student_id: student._id, Email,User,StudentName,StudentLastName ,Phone },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "1h"
                }
            )
        
            student.token = token
            res.status(201).json(student.token)
        
        }
    } catch (err) {
        console.log(err)
    }
};




exports.login = async (req, res) => {
    const { Email, Password } = req.body
    try {
  
        if (!(Email && Password)) {
           return  res.status(400).send("All input is required")
        }else{
        const student = await School.StudentModel.findOne({ Email });
        const cmp =await authStudent.comparePass(Password, student.Password)
      if (student && cmp) {
            const token = jwt.sign(
                { student_id: student._id ,Email:student.Email,User:student.User,StudentName:student.StudentName,StudentLastName:student.StudentLastName ,Phone:student.Phone},
                process.env.TOKEN_KEY,
                {
                    expiresIn: "1h",
                }
            )
            student.token = token
           return res.status(200).json(student.token)
        }
        }
    } catch (err) {
        console.log(err)
    }


}


exports.checkTheToken = (req, res) => {
    res.status(200).send("valid token")
}

//delete student
exports.manageAccount = (req, res) => {


    const ID = req.params.id;
    console.log(ID)
    const data = req.body


    School.StudentModel.findOneAndUpdate({ ID }, data, (err, result) => {
        if (err) res.status(404).send(err)
        res.status(201).send(result)
    })




}
exports.getStudent = async (req, res) => {
    try {
        const data = await School.StudentModel.find({})

        res.status(200).json(data)
    } catch (err) {
        console.log(err)
    }

}