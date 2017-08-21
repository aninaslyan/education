const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/education');

const userSchema = new mongoose.Schema({
    name: String,
    surname: String,
    age: Number,
    gender: String
});

const User = mongoose.model('User', userSchema, 'user');

module.exports = User;