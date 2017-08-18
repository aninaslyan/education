// CRUD     RESTful (http methods)

// crate    POST        /
// read     GET         /{id}   /  - list
// update   PUT         /{id}
// delete   DELETE      /{id}
const express = require('express');
const app = express();
const router = express.Router();
const email_service = require( __dirname + '/../service/email-service');
app.use('/', email_service);

router.post('/', function(req, res){
    try {
        sendEmail(/*res.body.email, res.body.subject, res.body.body, res.body.scheduleDateTime*/);
        res.sendStatus('POST request for sending email');
    } catch (err) {
        res.sendStatus(500);
    }
});

router.get('/:id', function(req, res){
    res.send('working');
});

router.put('/:id', function(req, res){
    res.send({type: 'PUT'});
});

router.delete('/:id', function(req, res){
    res.send({type: 'DELETE'});
});

module.exports = router;
app.use('/', router);

