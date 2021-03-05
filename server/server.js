const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Howdy Bailey!");
});

app.listen(3000);