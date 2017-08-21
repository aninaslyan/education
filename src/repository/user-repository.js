const Email = require('../model/user-mode');
const mongoose = require('mongoose');

async function create(emailObj) {
    return Email.create(emailObj);
}

async function getList(skip, limit) {
    return Email.find().skip(skip).limit(limit);
}

async function getOne(id) {
    return Email.findById(id);
}

async function update(id, emailObj) {
    return Email.update({_id: mongoose.mongo.ObjectId(id)}, {$set: emailObj});
}

async function remove(id) {
    return Email.remove({_id: mongoose.mongo.ObjectId(id)});
}

module.exports = {
    create: create,
    getList: getList,
    getOne: getOne,
    update: update,
    remove: remove,
};
