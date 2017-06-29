"use strict"
const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3000;

const app = express();

// middleware
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`);
});