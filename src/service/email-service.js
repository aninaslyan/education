const express = require('express');
const app = express();

const requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
};

const time = app.use(requestTime);

function createEmail(email, subjet, body, time) {


    //repository.createEmail(email, subjet, body, scheduleDateTime);

console.log('request');

}
