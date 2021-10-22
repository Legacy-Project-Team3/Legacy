var mongoose = require('mongoose');


var db=mongoose.connect(mongoUri).then(()=>{
    console.log("data connected ")
})

module.exports = db;
