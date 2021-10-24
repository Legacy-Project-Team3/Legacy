var eventRoute = require('express').Router();
var eventcontrolleur=require('./eventcontroller.js')
eventRoute.post('/event',eventcontrolleur.createEvent)
eventRoute.get('/getevent',eventcontrolleur.getEvent)
module.exports=eventRoute