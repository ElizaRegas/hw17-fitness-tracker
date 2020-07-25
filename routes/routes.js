const Workout = require("../models/Workout.js");
const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// router.get("/api/workouts", (req, res) => {
//   Workout.find()
//     .then((dbWorkout) => {
//       res.json(dbWorkout);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });

// router.get("/api/workouts/range", (req, res) => {
//   Workout.find({})
//     .limit(7)
//     .then((dbWorkout) => {
//       res.json(dbWorkout);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });

// router.post("/api/workouts", ({ body }, res) => {
//   Workout.create(body)
//     .then((dbWorkout) => {
//       res.json(dbWorkout);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });

// router.put("/api/workouts/:id", ({ body, params }, res) => {
//   Workout.findOneAndUpdate(params.id, {
//     $push: {
//       exercises: body,
//     },
//   })
//     .then((dbWorkout) => {
//       res.json(dbWorkout);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });

// router.delete("/api/workouts", ({ body }, res) => {
//   Workout.findOneAndDelete(body.id)
//       .then(dbWorkout => {
//           res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
// });

module.exports = router;