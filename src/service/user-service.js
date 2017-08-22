const userRepository = require('../repository/user-repository');

async function create(name, surname, age, gender) {
    if (!name) {
        throw new Error("Name not fount");
    }
    if (!surname) {
        throw new Error("Surname not fount");
    }
    if (!age) {
        throw new Error("Age not fount");
    }
    if (!gender) {
        throw new Error("Gedner not fount");
    }
    return userRepository.create({
        name: name,
        surname: surname,
        age: age,
        gender: gender
    });
}

async function getList(skip, limit) {
    return userRepository.getList(skip, limit);
}

async function getOne(id) {
    return userRepository.getOne(id);
}

async function update(id, name, surname, age, gender) {
    return userRepository.update(
        id,
        {
            name: name,
            surname: surname,
            age: age,
            gender: gender
        }
    );
}

async function remove(id) {
    return userRepository.remove(id);
}

module.exports = {
    create: create,
    getList: getList,
    getOne: getOne,
    update: update,
    remove: remove,
};