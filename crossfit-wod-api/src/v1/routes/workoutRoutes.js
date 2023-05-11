// In src/v1/routes/workoutRoutes.js
const express = require("express");
const workoutController = require("../../controllers/workoutController");

const router = express.Router();

//Rota com os exercícios
router.get("/", workoutController.getAllWorkouts);

router.get("/:workoutId", workoutController.getOneWorkout);

router.post("/", workoutController.createNewWorkout);

router.patch("/:workoutId", workoutController.updateOneWorkout);

router.delete("/:workoutId", workoutController.deleteOneWorkout);

//Rota com os membros
router.get("/:membersId", membersController.getOnemembers);

router.post("/", membersController.createNewmembers);

router.patch("/:membersId", membersController.updateOnemembers);

router.delete("/:membersId", membersController.deleteOnemembers);


//Rota das gravações
router.get("/:recordsId", recordsController.getOnerecords);

router.post("/", recordsController.createNewrecords);

router.patch("/:recordsId", recordsController.updateOnerecords);

router.delete("/:recordsId", recordsController.deleteOnerecords);




module.exports = router;