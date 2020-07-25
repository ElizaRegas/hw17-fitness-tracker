const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const viewRoutes = require("./routes/viewRoutes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./seeders/seed");

app.use(apiRoutes);
app.use(viewRoutes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});