const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

const Exercise = new Schema([
  {
    Resistance: {
      name: {
        type: String,
        trim: true,
        required: "Enter workout name.",
      },
      weight: {
        type: Number,
        trim: true,
        required: "Enter weight",
      },
      sets: {
        type: Number,
        trim: true,
        required: "Enter number of sets",
      },
      reps: {
        type: Number,
        trim: true,
        required: "Enter number of reps",
      },
      duration: {
        type: Number,
        trim: true,
        required: "Enter workout duration",
      }
    }
  },
  {
    Cardio: {
      name: {
        type: String,
        trim: true,
        required: "Enter workout name.",
      },
      distance: {
        type: Number,
        trim: true,
        required: "Enter workout distance",
      },
      duration: {
        type: Number,
        trim: true,
        required: "Enter workout duration",
      }
    }
  }
]);

const Workout = mongoose.model("Workout", Exercise);

module.exports = Workout;
