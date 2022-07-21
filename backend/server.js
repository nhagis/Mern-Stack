const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const workoutapi = require("./routes/workouts");
const mongoose = require("mongoose");

app.use(express.json());

app.use("/api/workouts", workoutapi);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Started at ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
