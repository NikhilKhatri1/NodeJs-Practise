const express = require('express');
const path = require('path');

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Optional, default is './views'

// Route that renders an HTML page
app.get('/', (req, res) => {
    const user = {
        name: 'Alice',
        age: 25,
        location: 'New York'
    };

    // Render the 'index' view and pass data to it
    res.render('index', { user });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
