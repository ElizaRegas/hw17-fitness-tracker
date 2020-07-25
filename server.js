const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/apiRoutes");
const viewRoutes = require("./routes/viewRoutes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/banana", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(apiRoutes);
app.use(viewRoutes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});