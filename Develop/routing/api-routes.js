// LOAD DATA
// Linking the routes to data
var fs = require("fs");
// var data = require("../db/db.json");
var data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
var path = require("path");

console.log(data);

// ROUTING
module.exports = function (app) {
  // API GET Requests
  app.get("/api/notes", function (req, res) {
    res.json(data);
  });

  app.get("/api/notes/:id", function (req, res) {
    res.json(data[Number(req.params.id)]);
  });

  // API POST Requests
  app.post("/api/notes", function (req, res) {
    let newNote = req.body;
    let uniqueId = data.length.toString();
    console.log(uniqueId);
    newNote.id = uniqueId;

    // need to push the newNote so we can write it
    data.push(newNote);

    // let parsedata = JSON.stringify(data);
    fs.writeFile(path.join("./db/db.json", JSON.stringify(data)), function (
      err
    ) {
      if (err) throw err;
    });
    res.json(data);
  });

  // API DELETE Requests
  app.delete("/api/notes/:id", function (req, res) {
    // let parsedata = JSON.stringify(data);
    let noteId = req.params.id;
    let newId = 0;
    console.log("Deleting note with id ${noteId}");
    data = data.filter(currentNote => {
      return currentNote.id != noteId;
    });
    for (currentNote of data) {
      currentNote.id = newId.toString();
      newId++;
    }
    fs.writeFileSync("./db/db.json", JSON.stringify(data));
    res.json(data);
  });
};
