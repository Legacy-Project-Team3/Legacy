var ImagesRouter = require('express').Router();
var imagesController = require("../images/imagesController")

var upload = require("../cloudinary/multer");

ImagesRouter.route("/image")
.post(upload.single("image"),imagesController.saveImages)


module.exports = ImagesRouter