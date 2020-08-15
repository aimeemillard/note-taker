// DEPENDENCIES
// Path package to get correct file for the HTML

const path = require("path");

// ROUTING
module.exports = function (app) {
  // HTML GET Requests
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
};
