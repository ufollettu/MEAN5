const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db.js');
const PORT = 3000;

var app = express();
app.use(bodyParser.json());

app.listen(PORT, () => console.log('server started at ' + PORT));
