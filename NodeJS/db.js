const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/MEAN4+',
    (err) => {
        if (!err) {
            console.log('connection ok...');
        } else {
            console.log('connection error' + JSON.stringify(err, undefined, 2));
        }
    });

module.exports = mongoose;