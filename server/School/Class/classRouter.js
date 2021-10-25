var classRouter = require('express').Router();
var classController = require("../Class/classController")

classRouter.route('/class/:id')
.post(classController.createClass)
.get(classController.getClass)
.delete(classController.deleteClass)

classRouter.route('/class')
.post(classController.allClass)


module.exports = classRouter