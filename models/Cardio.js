const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardioSchema = new Schema({
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
  },
});

const Cardio = mongoose.model("Cardio", CardioSchema);

module.exports = Cardio;