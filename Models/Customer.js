const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model('Customer', CustomerSchema);
