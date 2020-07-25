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

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/stats", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.post("/stats", ({ body }, res) => {
  User.create(body)
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
