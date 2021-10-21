var Auth = require("../Athuentication/Auth")
var School = require("../School")
//
exports.createAdmin = (req, res) => {
    // taking the information of the admin 
    // and use distructing to take the password 
console.log(req.body)
    let { User, Password, Email ,ImageUrl} = req.body
    /// hash the password 
    Auth.HashPass(Password).then(Hashed => {
        //save it into the data base  with the hashed password 
        School.AdminModel.create({ User, Password: Hashed, Email,ImageUrl })
            .then(() => {
                res.sendStatus(201)
            })
            //if there is an error 
            .catch((err) => {
               res.sendStatus(404)
            })
    })

};

exports.CheckIfThePassRight = (req, res) => {
   
    let { User, Password } = req.body
    
    School.AdminModel.findOne({User:User}, (err, result) => {
        let hashedPass = result.Password
        let UserNameFromDataBase = result.User
       
        if (UserNameFromDataBase === User) {
            Auth.comparePass(Password, hashedPass).then(bool => {
                
                if (bool) {
                   
                    res.status(201).send(result)
                } else {
                    res.status(404).send(err)
                }
            })
        } else if (err) {
            res.status(500).send(err)
        }

    })

}

// delete a teacher
exports.deleteOneTeacher = (req,res) => {
    if(!req.body){
        return res.status(400).send('can not delet this Teacher');
    }
    const Email = req.params.Email;
    School.createTeacherSchema.findOneAndRemove({email:Email})
    .then(data=>{
        if(!data){
            res.status(404).send('Can not delet this check again');
        } else {
            res.send('data deleted suscefuly');
        }
    })
    .catch(err => {
        res.status.send(err)
    });
};
//delete a student
exports.deleteOneStudent = (req,res) => {
   if(!req.body){
       return res.status(400).send('can not delet this Teacher');
   }
   const Email = req.params.Email;
   School.createStudentSchema.findOneAndRemove({email:Email})
   .then(data=>{
       if(!data){
           res.status(404).send('Can not delet this check again');
       } else {
           res.send('data deleted suscefuly');
       }
   })
   .catch(err => {
       res.status.send(err)
   });
}; 