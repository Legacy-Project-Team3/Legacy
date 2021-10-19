var ResultRoute = require("express").Router()
var resultController = require("./ResultController")
// for the result i need the student id the teacher id 
ResultRoute.route("/result/:id")
    .get(resultController.getResult)
    .post(resultController.addResult)

module.exports = ResultRoute