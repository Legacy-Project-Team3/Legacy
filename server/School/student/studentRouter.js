var studentRouter = require("express").Router();
const { get } = require("mongoose");
var studentController = require("../student/studentController");

studentRouter
  .route("/student/:id")
  //all will take the id of the teacher
  .get(studentController.getStudent)
  .post(studentController.createStudent)
  .put(studentController.updateStudent)
  .delete(studentController.deleteStudent);

studentRouter.route("/findstudent").post(studentController.findStudent);

module.exports = studentRouter;
