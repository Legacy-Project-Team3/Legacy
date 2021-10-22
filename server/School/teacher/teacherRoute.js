var teacherRoute = require('express').Router();
var teacherController = require("../teacher/teacherController");
var mid = require('./middlwareAuth')

teacherRoute.route("/teacher/signin")
.post(teacherController.login)

teacherRoute.route('/teacher/signup')
    .post(teacherController.createTeacher)

teacherRoute.route('/teacher')
    // .post(teacherController.createTeacher)
    .get(teacherController.getAllTeachersAndStudent)

teacherRoute.route("/teacher/check")
    .post(mid,teacherController.checkTheToken)

teacherRoute.route('/teacher/:id')
    .get(teacherController.getAllStudent)
    .put(teacherController.updateTeacher)
    .delete(teacherController.deleteTeacher)

teacherRoute.route('/find')
    .post(teacherController.findTeacher)

teacherRoute.route('/find/:id')
    .get(teacherController.findAllWork)    


module.exports = teacherRoute;