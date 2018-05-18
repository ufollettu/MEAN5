const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {mongoose} = require('./db');
const PORT = 3000;

var employeeController = require('./controllers/employee.controller');

var app = express();
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));

app.listen(PORT, () => console.log('server started at ' + PORT));

app.use('/employees', employeeController);
