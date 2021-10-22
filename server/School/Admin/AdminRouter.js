var AdminRoute = require('express').Router();
var AdminController = require("../Admin/AdminController")

//
AdminRoute.route('/admin')
    .post(AdminController.createAdmin)

AdminRoute.route('/admin/check')
    .post(AdminController.CheckIfThePassRight)

    AdminRoute.route('/admin/teacher/id')
    .post(AdminController.deleteOneTeacher)
 
    AdminRoute.route('admin/student/id')
    .post(AdminController.deleteOneStudent)

module.exports = AdminRoute;