var exerciceRouter = require('express').Router();
var exerciceController = require("./exerciceConroller")

//
exerciceRouter.route('/exercice/:id')
    .post(exerciceController.createExercice)
    .get(exerciceController.findExercice)
    .delete(exerciceController.deleteExercice)



exerciceRouter.route('exercice')
    .get(exerciceController.allExercice)    




module.exports = exerciceRouter;