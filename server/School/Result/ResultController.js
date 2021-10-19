var School = require("../School")
//


exports.getResult = (req, res) => {
    let studentId = req.params.id
    School.StudentModel.findOne({_id:studentId}, (result)=>{
       console.log(result)   
    })

}


exports.addResult = function (req, res) {
    // taking the result that come from the client     
    var result = req.body
    // taking the id of that specific student 
    var studentId = req.params.id
    // save the result into data base 
    School.ResultModel.create(result)
        .then((data) => {
            // use that id to update the array of result inside the student with the id of the result that the mongoose generated 
            // when we save the result 
            // I put the result inside the schema student in order to make it for the client when he want take the result 
            // and render it 
            // if the teacher want the result he can get from the data base of student     
            return School.StudentModel.findByIdAndUpdate(studentId, {
                $push: {
                    Result: data
                }
            })
        })
        // if there is an error 
        .catch(err => {
            console.log(err)
        })
}