const router = require("express").Router();
const database = require("mime-db");
const db = require("../../db/db.json");
const uuid = require("../../public/assets/js/uuid");

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
  fs.writeFileSync('../../db/db.json', JSON.stringify(db));
  res.json(req.body);
})

// DELETE /api/notes/:id
// router.delete("/api/notes/:id", (req,res) => {
//   var id = req.params.id; 
// fs.readFileSync()
// fs.writeFileSync()
// })

module.exports = router;