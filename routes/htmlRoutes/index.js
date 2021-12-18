const path = require("path");
const router = require("express").Router();


//route to index
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, '../../public.index.html'));
// })

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });

//route to notes.html
router.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

//route to wildcard * 
router.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;

