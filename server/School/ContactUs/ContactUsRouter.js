var contactUsRouter = require("express").Router()
var adminController = require("../ContactUs/ContactUsController")


contactUsRouter.route("/contactus")
    .post(adminController.saveContactUs)
    .get(adminController.getAllContactUs)



module.exports = contactUsRouter;