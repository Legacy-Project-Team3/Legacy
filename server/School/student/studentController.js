require("dotenv").config();
var authStudent = require("../Athuentication/Auth")
var School = require("../School")
var jwt = require("jsonwebtoken")
//
exports.createStudent = async function (req, res) {

    const {User, StudentName, StudentLastName, Email, Password, ImageUrl, Age, Phone } = req.body
    try {
        if (!(StudentName && StudentLastName && Email && Password && ImageUrl && Age && Phone&&User)) {
            res.status(400).send("all input is required")
        }
        //  if(Password){
        // check the pass with regx
        //  }   
        const existingUser = await School.StudentModel.findOne({ Email })
        if (existingUser) {
            return res.status(409).send("Student is already exist ")
        }

        let passwordHased = await authStudent.HashPass(Password)
        console.log("here the hashed password " + passwordHased)
        const student = await School.StudentModel.create({ StudentName, StudentLastName, Email: Email.toLowerCase(), Password: passwordHased, ImageUrl, Age, Phone })
        const token = jwt.sign(
            { student_id: student._id, Email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "1h"
            }
        )
        console.log("here is the token " + token)
        student.token = token
        res.status(201).json(student)
        console.log("check" + student)
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
exports.manageAccount =async  (req, res) => {
    try{
        const ID =req.headers ;
        if(req.body.Password!==null){
       const   {User, StudentName, StudentLastName, Email, Password, ImageUrl, Age, Phone } =req.body
       hashPass = await authStudent.HashPass(Password)

        data = {User, StudentName, StudentLastName, Email, Password:hashPass, ImageUrl, Age, Phone }
        }else{
            data=req.body
        }
       
        await School.StudentModel.findOneAndUpdate(ID,data)
        res.status(201).send(data)
    }catch(err){
        console.log(err)
    }


}
exports.getStudent = async (req,res)=>{
    try {
      const data  = await   School.StudentModel.find({})
    
      res.status(200).json(data)
    }catch(err){
        console.log(err)
    }

}