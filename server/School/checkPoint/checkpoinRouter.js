var checkPointRouter = require('express').Router();
var checkPointController = require("../checkPoint/checkPointController")

//
checkPointRouter.route('/checkpoint/:id')
    .post(checkPointController.createCheckPoint)
    
    .delete(checkPointController.deleteCheckpoint)
    


checkPointRouter.route('/Checkpoint')
    .post(checkPointController.allCheckpoint)    
    .get(checkPointController.getCheckponit)



module.exports = checkPointRouter;