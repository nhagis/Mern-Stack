const express = require("express");
const route = express.Router();
const Workout = require("../models/workoutModel");
const {
  getWorkouts,
  createWorkout,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controller/workoutController");

route.get("/", getWorkouts);
route.get("/:id", getWorkout);
route.post("/", createWorkout);
route.delete("/:id", deleteWorkout);

route.patch("/:id", updateWorkout);

module.exports = route;
