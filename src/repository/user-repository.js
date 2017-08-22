const User = require('../model/user-mode');
const mongoose = require('mongoose');

async function create(UserObj) {
    return User.create(UserObj);
}

async function getList(skip, limit) {
    return User.find().skip(skip).limit(limit);
}

async function getOne(id) {
    return User.findById(id);
}

async function update(id, UserObj) {
    return User.update({_id: mongoose.mongo.ObjectId(id)}, {$set: UserObj});
}

async function remove(id) {
    return User.remove({_id: mongoose.mongo.ObjectId(id)});
}

module.exports = {
    create: create,
    getList: getList,
    getOne: getOne,
    update: update,
    remove: remove,
};