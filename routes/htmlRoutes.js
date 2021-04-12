const path = require('path');

module.exports = (app) => {
// Display notes.html when /notes is accessed
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
 // Display index.html when all other routes are accessed
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};
