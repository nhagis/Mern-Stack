const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const workoutapi = require("./routes/workouts");
const userapi = require("./routes/user");
const mongoose = require("mongoose");

app.use(express.json());

app.use("/api/workouts", workoutapi);
app.use("/api/user", userapi);

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
