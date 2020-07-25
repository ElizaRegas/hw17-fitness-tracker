const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({
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
});

const Resistance = mongoose.model("Resistance", ResistanceSchema);

module.exports = Resistance;