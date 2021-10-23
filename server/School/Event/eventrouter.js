var eventRoute = require('express').Router();
var eventcontrolleur=require('./eventcontroller.js')
eventRoute.post('/event',eventcontrolleur.createEvent)
module.exports=eventRoute