var AdminRoute = require('express').Router();
var AdminController = require("../Admin/AdminController")

//
AdminRoute.route('/admin')
    .post(AdminController.createAdmin)

AdminRoute.route('/admin/check')
    .post(AdminController.CheckIfThePassRight)

    AdminRoute.route('/admin/teacher/:id')
    .delete(AdminController.deleteOneTeacher)
 
    AdminRoute.route('admin/student/:id')
    .delete(AdminController.deleteOneStudent)

module.exports = AdminRoute;