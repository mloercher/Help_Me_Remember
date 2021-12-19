const router = require("express").Router();
// const database = require("mime-db");
const db = require("../../db/db.json");
const uuid = require("../../public/assets/js/uuid");
const fs = require('fs');

// `GET /api/notes`
router.get("/notes", (req, res) => {
    console.log(req);
    var data = db;
    res.json(data);
});

// `POST /api/notes` 
router.post("/notes", (req,res) => {
  if(!req.body.id) {
    req.body.id = uuid();
  }
  db.push(req.body);                    
  fs.writeFileSync('./db/db.json', JSON.stringify(db));
  res.json(req.body);
})

// // DELETE /api/notes/:id
// router.delete("/notes/:id", (req,res) => {
//   var id = req.params.id;
//   // fs.readFileSync('./db/db.json', JSON.parse(db));
//   if (req.params.id !== id) {
//     fs.writeFileSync('./db/db.json', JSON.stringify(db));
//     res.json(req.body);
//   }
  
// DELETE /api/notes/:id
router.delete("/notes/:id", (req,res) => {
  var id = req.params.id;
  var data = JSON.parse(fs.readFileSync("./db/db.json"));
  var filtered = data.filter(item => item.id !== id);
  fs.writeFileSync("./db/db.json", JSON.stringify(filtered));
  res.sendStatus(204);
  });

module.exports = router;