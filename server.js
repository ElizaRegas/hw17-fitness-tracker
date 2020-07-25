const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/budget"; 
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});