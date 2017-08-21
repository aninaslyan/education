const repository = require('../repository/email-repository');

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
    if (!gedner) {
        throw new Error("Gedner not fount");
    }
    return emailRepository.create({
        name: name,
        surname: surname,
        age: age,
        gender: gender
    });
}

async function getList(skip, limit) {
    return emailRepository.getList(skip, limit);
}

async function getOne(id) {
    return emailRepository.getOne(id);
}

async function update(id, name, surname, age, gender) {
    return emailRepository.update(
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
    return emailRepository.remove(id);
}

module.exports = {
    create: create,
    getList: getList,
    getOne: getOne,
    update: update,
    remove: remove,
};
