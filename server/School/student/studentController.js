require("dotenv").config();
var authStudent = require("../Athuentication/Auth")
var School = require("../School")
var jwt = require("jsonwebtoken")
//
exports.createStudent = async function (req, res) {

    const { User, StudentName, StudentLastName, Email, Password, ImageUrl, Age, Phone } = req.body
    try {

        //  if(Password){
        // check the pass with regx
        //  }   
        const existingUser = await School.StudentModel.findOne({ Email })
        if (existingUser) {
            return res.status(409).send("Student is already exist ")
        }


        else {
            // console.log("here the hashed password " + passwordHased)
            // let passwordHased = await authStudent.HashPass(Password,salt=10)

            const student = await School.StudentModel.create({ User, StudentName, StudentLastName, Email: Email, Password, ImageUrl, Age, Phone })
            const token = jwt.sign(
                { student_id: student._id, Email,User,StudentName,StudentLastName ,ImageUrl,Phone},
                process.env.TOKEN_KEY,
                {
                    expiresIn: "1h"
                }
            )
            console.log("here is the token " + token)
            student.token = token
            res.status(201).json(student.token)
            console.log("check" + student)
        }
    } catch (err) {
        console.log(err)
    }
};




exports.login = async (req, res) => {
    try {
        const { Email, Password } = req.body
        if (!(Email && Password)) {
            res.status(400).send("All input is required")
        }
        const student = await School.StudentModel.findOne({ Email });
        if (student && (await authStudent.comparePass(Password, student.Password))) {
            const token = jwt.sign(
                { student_id: student._id },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "1h",
                }
            )
            student.token = token
            res.status(200).json(student)

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