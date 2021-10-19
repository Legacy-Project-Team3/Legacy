var teacherRoute = require('express').Router();
var teacherController = require("../teacher/teacherController");
//


teacherRoute.route('/teacher')
    .post(teacherController.createTeacher)
    .get(teacherController.getAllTeachersAndStudent)


teacherRoute.route('/teacher/:id')
    .get(teacherController.getAllStudent)
    .put(teacherController.updateTeacher)
    .delete(teacherController.deleteTeacher)

teacherRoute.route('/find')
    .post(teacherController.findTeacher)
    


teacherRoute.route('/find/:id')
    .get(teacherController.findAllWork)    





module.exports = teacherRoute;