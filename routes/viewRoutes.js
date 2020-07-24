const path = require("path");


const viewRoutes = (app) => {
  app.get("/", (req, res) => {
    console.log("index hit");
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};

module.exports = viewRoutes;