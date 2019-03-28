const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        reguired: true
    },
    password: {
        type: String,
        reguired: true
    },
    email: {
        type: String,
        reguired: true
    },
    avatar: {
        type: String,
        reguired: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = user = mongoose.model('users', UserSchema);