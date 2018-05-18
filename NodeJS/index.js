const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db');
const PORT = 3000;

var employeeController = require('./controllers/employee.controller');

var app = express();
app.use(bodyParser.json());

app.listen(PORT, () => console.log('server started at ' + PORT));

app.use('/employees', employeeController);
