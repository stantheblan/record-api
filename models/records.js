const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
    artist: {type: String, required: true},
    title: {type: String, required: true},
    art: {type: String, required: true},
    year: {type: Number, required: true},
    genre: {type: String, required: true}
});

const Records = mongoose.model('Record', recordSchema);

module.exports = Records;
