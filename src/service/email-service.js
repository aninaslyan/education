const repository = require('../repository/email-repository');

async function create(email, subject, body, scheduleDateTime) {
    if (!email) {
        throw new Error("Email not fount");
    }
    if (!subject) {
        throw new Error("Subject not fount");
    }
    if (!body) {
        throw new Error("Body not fount");
    }
    if (!scheduleDateTime) {
        throw new Error("Schedule Date Time not fount");
    }
    return emailRepository.create({
        email: email,
        subject: subject,
        body: body,
        scheduleDateTime: scheduleDateTime
    });
}

async function getList(skip, limit) {
    return emailRepository.getList(skip, limit);
}

async function getOne(id) {
    return emailRepository.getOne(id);
}

async function update(id, email, subject, body, scheduleDateTime) {
    return emailRepository.update(
        id,
        {
            email: email,
            subject: subject,
            body: body,
            scheduleDateTime: scheduleDateTime
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
