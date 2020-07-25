const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercise: [
    {
      name: {
        type: String,
        trim: true,
        required: "Enter exercise name.",
      },
      type: {
        type: String,
        trim: true,
        required: "Enter exercise type."
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
  ],

  // toJSON: {
  //   virtuals: true
  // }

  }
);

// adds a dynamically-created property to schema
workoutSchema.virtual("totalDuration").get(function () {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;