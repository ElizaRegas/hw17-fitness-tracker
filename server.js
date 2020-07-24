const express = require("express");
const logger = require("morgan");
const viewRoutes = require("./routes/viewRoutes.js");
const apiRoutes = require("./routes/apiRoutes.js");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(viewRoutes);
app.use(apiRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});