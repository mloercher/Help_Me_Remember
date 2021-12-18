const fs = require('fs');
const path = require('path');
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const htmlRoutes = require('./routes/htmlRoutes');
// const apiRoutes = require('./routes/apiRoutes');

//parse incoming string or array data
app.use(express.urlencoded({extended: true }));
//parse incoming JSON data
app.use(express.json());
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);
const { notes } = require("./Develop/db/db.json");
app.use(express.static('public'));
//


//GET request to index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Develop/public/index.html'));
});

//GET request to notes.html
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'Develop/public/notes.html'));
});



//listen function
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });