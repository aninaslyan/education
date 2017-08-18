const requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
};

function sendEmail(/*email, subjet, body, time*/) {

    //repository.createEmail(email, subjet, body, scheduleDateTime);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'aninaslyan84@gmail.com',
            pass: 'password'
        }
    });

    const mailOptions = {
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

module.exports = {
    sendEmail: sendEmail
};
