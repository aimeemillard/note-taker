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
    let newNote = req.body;
    let noteNum = data.length + 1;
    newNote.id = noteNum;

    // need to push the newNote so we can write it
    data.push(newNote);

    let parsedata = JSON.stringify(data);
    fs.writeFile(path.join("./db/db.json"), parsedata, err => {
      if (err) throw err;
    });
    res.json(data);
  });

  // API DELETE Requests
  app.delete("/api/notes/:id", function (req, res) {
    let noteId = re.params.id;
    let newId = 0;
    data = data.filter(currentNote => {
      return currentNote.id != noteId;
    });
    for (currentNote of data) {
      currentNote.id = newId.toString();
      newId++;
    }
    fs.writeFileSync("./db/db.json"), parsedata;
    res.json(data);
  });
};
