var School = require("../School")
exports.saveContactUs = (req, res) => {
    //taking the data contact us 
    let contactUs = req.body
    // save it into data base 
    School.contactUsModel.create(contactUs)
        .then(() => {
            //if the data save it response with 201 status
            res.status(201).send()
        })
        // if there is an error response with 404 status 
        .catch((err) => {
            res.status(404).send(err)
        })
}


exports.getAllContactUs = (req, res) => {
    // look for all data from data base 
    School.contactUsModel.find({}, (err, result) => {
        if (err) {
            // if data not found response with 404 status
            res.sendStatus(404)
        }
        //else response with the data     
        res.status(200).send(result)
    })

}

