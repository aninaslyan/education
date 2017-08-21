const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/education');

const emailSchema = new mongoose.Schema({
    email: String,
    subject: String,
    body: String,
    scheduleDateTime: { type: Date, default: Date.now },
    isSend: { type: Boolean, default: false },
    isRead: { type: Boolean, default: false }
});

const Email = mongoose.model('Email', emailSchema, 'email');

module.exports = Email;