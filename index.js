// Import necessary modules
const express = require('express'); // Import Express
const fs = require('fs'); // Import file system module to read JSON file
const path = require('path'); // Import path module for working with file paths

// Initialize the Express application
const app = express();
const PORT = 3000; // Define the port where the server will run

// Middleware to serve static files (HTML, CSS, JS, images)
app.use(express.static('public'));

// API Route: Fetch sneaker data from JSON file
app.get('/api/sneakers', (req, res) => {
    // Read the JSON file
    fs.readFile(path.join(__dirname, 'data', 'sneakers.json'), 'utf8', (err, data) => {
        if (err) {
            // Send an error response if there's an issue reading the file
            res.status(500).json({ message: "Error reading data" });
        } else {
            // Send the JSON data as a response
            res.json(JSON.parse(data));
        }
    });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
