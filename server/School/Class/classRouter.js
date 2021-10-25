var classRouter = require('express').Router();
var classController = require("../Class/classController")

classRouter.route('/class/:id')
.post(classController.createClass)
.get(classController.getClass)
.delete(classController.deleteClass)

classRouter.route('/class')
.get(classController.allClass)


module.exports = classRouter