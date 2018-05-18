const express = require('express');
const mongoose = require('mongoose');

var router = express.Router();
var ObjectId = mongoose.Types.ObjectId;

// to use autocompletion for mongoose in webstorm
var MODEL_PATH = '../models/';
var {Employee} = require(MODEL_PATH + 'employee');

// GET localhost:3000/employees/
router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('error retrieving Employees' + JSON.stringify(err, undefined, 2));
        }
    });
});

// GET localhost:3000/employees/:id
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`no record with id: ${req.params.id}`);
    Employee.findById(req.params.id, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('error retrieving Employee' + JSON.stringify(err, undefined, 2));
        }
    });
});

// POST localhost:3000/employees/
router.post('/', (req, res) => {
    var emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    });
    emp.save((err, doc) => {
        if (!err) {
            res.send(doc)
        } else {
            console.log('error in Employee save' + JSON.stringify(err, undefined, 2));
        }
    })
});

// PUT localhost:3000/employees/:id
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`no record with id: ${req.params.id}`);

    var emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    };

    Employee.findByIdAndUpdate(req.params.id, {$set: emp}, {new: true}, (err, doc) => {
        if (!err) {
            res.send(doc)
        } else {
            console.log('error in Employee update' + JSON.stringify(err, undefined, 2));
        }
    });
});

// DELETE localhost:3000/employees/:id
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`no record with id: ${req.params.id}`);

    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc)
        } else {
            console.log('error in Employee delete' + JSON.stringify(err, undefined, 2));
        }
    });
});

module.exports = router;