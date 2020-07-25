const Workout = require("../models/Cardio.js");

module.exports = (app) => {
  app.get("/api/workouts/range", (req , res) => {
    Workout.find({}).limit(7)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.put("/api/workouts/:id", ({body, params}, res) => {
    Workout.findByIdAndUpdate(params.id, {
      $push: {
        exercises: body
      }
    }).then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  });
};