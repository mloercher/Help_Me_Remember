const express = require("express");
const app = express();
const path = require("path");
const router = require("express").Router();

//route to index
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, '../../public.index.html'));
// })

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Develop/public/index.html'));
  });

//route to notes.html
app.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

//route to wildcard * 
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;

