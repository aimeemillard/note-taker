// LOAD DATA
// Linking the routes to data
var fs = require("fs");
var data = require("../db/db.json");

console.log(data);

// ROUTING
module.exports = function (app) {
  // API GET Requests
  app.get("/api/notes", function (req, res) {
    res.json(data);
  });

  // API POST Requests
  app.post("/api/notes", function (req, res) {
    res.json(data);
  });

  // API DELETE Requests
  app.delete("/api/notes/:id", function (req, res) {
    res.json(data);
  });
};
