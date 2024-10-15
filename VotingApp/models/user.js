const mongoose = require("mongoose");
// const bcrypt = require("bcrypt")


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    mobile: {
        type: String,
    },
    address: {
        type: String,
        required: true
    },
    adhaarCardNumber: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['voter', 'admin'],
        default: 'voter'
    },
    isVoted: {
        type: Boolean,
        default: false
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;