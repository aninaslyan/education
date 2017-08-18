const express = require('express');
const router = express.Router();
const app = express();

const requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
};

const time = app.use(requestTime);
console.log(time);

function sendEmail(/*email, subjet, body, time*/) {

    //repository.createEmail(email, subjet, body, scheduleDateTime);

    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'aninaslyan84@gmail.com',
            pass: 'password'
        }
    });

    var mailOptions = {
        from: 'noreply.email@gmail.com',
        to: 'ani.naslyan82@gmail.com',
        subject: 'Sending Email',
        text: 'A body message'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}
//sendEmail();
module.exports = router;
