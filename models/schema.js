const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter workout name."
    },
  type: {
    type: String,
    trim: true,
    required: "Enter workout type"
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
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;


    // day: {
    //     type: Date, default: new Date
    // },
    
    // {
    // toJSON:{
    //     virtuals: true
    // }

// workoutsSchema.virtual("totalDuration").get(function(){
//     return this.exercises.reduce((total, exercise) => {
//         return total + exercise.duration;
//     },0)
// });
