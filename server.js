
const express = require("express");
const fs = require("fs");
const path = require('path');
const util = require('util');
// const writeFile = util.promisify(fs.writeFile);
// const readFile = util.promisify(fs.readFile);
// const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.post('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.delete('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});