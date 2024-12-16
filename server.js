const express = require('express');
const { a } = require('framer-motion/client');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;
//localhost:4000

// middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

// listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})