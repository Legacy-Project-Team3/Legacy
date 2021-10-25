require("dotenv").config();
var AuthAdmin = require("../Athuentication/Auth")
var School = require("../School")
var jwte = require("jsonwebtoken")
//
exports.createAdmin = async function (req, res)  {
    // taking the information of the admin 
    // and use distructing to take the password 
console.log(req.body)
    let { User, Password, Email ,ImageUrl} = req.body
    /// hash the password 
    try {
        const existingUser = await School.AdminModel.findOne({ Email })
        if (existingUser) {
            return res.status(409).send("Adlin is already exist ")
        }
        else{
            let passwordHased = await AuthAdmin.HashPass(Password)

            
            const admin = await School.AdminModel.create({ User, Password : passwordHased, Email:Email ,ImageUrl})
    
            const token = jwte.sign(

                { admin_id: admin._id, Email,User,ImageUrl},
                process.env.TOKEN_KEY,
                {
                    expiresIn: "1h"
                }
            )
        
            admin.token = token
            res.status(201).json(admin.token)
        }
    }
    catch (err) {
        console.log(err)
    }
};

exports.CheckIfThePassRight = async function (req, res)  {
   
    let { Email, Password } = req.body
    try {
  
        if (!(Email && Password)) {
           return  res.status(400).send("All input is required")
        }else{
        const admin = await School.AdminModel.findOne({ Email });
        const cmp =await AuthAdmin.comparePass(Password, admin.Password)
      if (admin && cmp) {
            const token = jwte.sign(
                { admin_id: admin._id ,Email:admin.Email,User:admin.User},
                process.env.TOKEN_KEY,
                {
                    expiresIn: "1h",
                }
            )
            admin.token = token
           return res.status(200).json(admin.token)
        }
        }
    } catch (err) {
        console.log(err)
    }
   

}

// delete a teacher
exports.deleteOneTeacher = (req,res) => {
    if(!req.body){
        return res.status(400).send('can not delete this Teacher');
    }
    const id = req.params.id;
    School.TeacherModel.findByIdAndDelete(id,(err,data) =>{
        if(err) {
            res.status(404).send(err)
        }
        if(data){
            res.send('data deleted suscefuly')
        }
    })
};

//delete a student
exports.deleteOneStudent = (req,res) => {
   if(!req.body){
       return res.status(400).send('can not delete this Student');
   }
   const id = req.params._id;
   console.log(id)
   School.StudentModel.findByIdAndDelete(id,(err,data) =>{
    if(err) {
        res.status(404).send(err)
    }
    if(data){
        res.send('data deleted suscefuly')
    }
   })
}; 