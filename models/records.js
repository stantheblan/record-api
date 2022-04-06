const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
    artist: {type: String, required: true},
    title: {type: String, required: true},
    cover: {type: String, required: true},    //img link
    year: {type: Number, required: true},
    genre: {type: String, required: true}
});

const Records = mongoose.model('Record', recordSchema);

module.exports = Records;