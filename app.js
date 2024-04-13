const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.status(200).json({
        masg: 'welcome to the app'
    });
});

// For handling all other routes
app.all('*', (req, res) => {
    res.status(404).json({
        error: 'Route not found'
    });
});

module.exports = app;
