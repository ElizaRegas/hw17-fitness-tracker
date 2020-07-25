const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
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
        required: "Enter exercise type.",
      },
      duration: {
        type: Number,
        trim: true,
        required: "Enter workout duration",
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
    }
  ]
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
