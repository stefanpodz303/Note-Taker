const path = require('path');
const util = require('util');

const { v4: uuidv4 } = require('uuid');
const fs = require('fs')
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);


module.exports = (app) => {
     // Setup the /api/notes get route
    app.get('/api/notes', (req, res) => {
        readFile('db/db.json', 'utf8')
            .then((notesData) => {
                res.json(JSON.parse(notesData))
            })
    });
    // Setup the /api/notes post route
    app.post('/api/notes', (req, res) => {
        readFile('db/db.json', 'utf8')
            .then((notesData) => {
                const notes = JSON.parse(notesData)
                console.log(notes, notesData)
                const newNote = req.body
                newNote.id = uuidv4();
                notes.push(newNote)
                writeFile('db/db.json', JSON.stringify(notes, null, '\t')).then(() => {
                    res.json(notes)
                })

            })
    });

    // Deletes a note with specific id
    app.delete('/api/notes/:id', (req, res) => {
        const choice = req.params.id;
        console.log(res);
        console.log(choice);
        readFile("db/db.json", "utf8").then((notesData) => {
            const notes = JSON.parse(notesData)
            const notesFilter = notes.filter(val => val.id !== choice);
            writeFile("db/db.json", JSON.stringify(notesFilter, null, "\t")).then(() => {
                res.json(notesFilter);
            })
        });
    });
}




