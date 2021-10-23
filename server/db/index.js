var mongoose = require('mongoose');
const { MONGO_URI } = process.env;

var db=mongoose.connect(MONGO_URI).then(()=>{
    console.log("data connected ")
})

module.exports = db;
