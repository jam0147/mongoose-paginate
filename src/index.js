const express = require('express');
const app  = express();

require('./database');

app.get('/', (req, res) => {
    res.send(`Hello World`);
});

app.listen(3000);