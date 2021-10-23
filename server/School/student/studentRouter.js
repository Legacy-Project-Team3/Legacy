var studentRouter = require("express").Router();
var studentController = require("../student/studentController");
var mid = require('./middlwareAuth')


studentRouter.route("/student/update/:id")
.put(mid,studentController.manageAccount)
studentRouter.route("/student/login")
  .post(studentController.login)
studentRouter.route('/student')
.get(studentController.getStudent)
studentRouter.route("/student/register")
  .post(studentController.createStudent);
studentRouter.route("/student/check")
  .post(mid,studentController.checkTheToken)
module.exports = studentRouter;
