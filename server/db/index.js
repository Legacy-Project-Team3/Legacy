var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/pokemon';

//
var db=mongoose.connect(mongoUri).then(()=>{
    console.log("data connected ")
})

module.exports = db;
