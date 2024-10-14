const express = require('express');
const path = require('path');

const app = express();
const port = 3013;

let numberOfVisits = 0;

// Set the static directory for CSS and other assets
app.use(express.static(path.join(__dirname, 'static')));

// Route to serve the index.html for the root path
app.get('/', (req, res) => {
    numberOfVisits++;
    res.sendFile(path.join(__dirname, '/static/index2.html')); // Replace with your HTML file path
});

app.get('/visits', (req, res) => {
    res.send(`Number of visits: ${numberOfVisits}`);
});

app.get('*', (req, res) => {
    res.status(404).send('404 Not Found');
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
