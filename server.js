const express = require("express");
const logger = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./Develop/public"));

app.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname + '/Develop/public/exercise.html'));
});

// app.get("/exericse", ({ body }, res) => {
//   console.log(body);
//   User.create(body)
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
