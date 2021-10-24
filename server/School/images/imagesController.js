var School = require('../School');

var cloudinary  = require("../cloudinary/cloud");
var path = require("path")


exports.saveImages = async(req,res)=>{

    try{
        const result = await cloudinary.uploader.upload(req.file.path);
    // console.log(req.file.path)
    //create instance of image 
     let img =  ({
       name : req.body.name,
       avatar : result.secure_url,
       cloudinary_id : result.public_id,
     })
    
    
    await School.imges.create(img)
   
    res.send({ImageUrl : result.secure_url})
        } 
      catch(err){
    console.log(err)
        }
}