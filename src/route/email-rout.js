// CRUD     RESTful (http methods)

// crate    POST        /
// read     GET         /{id}   /  - list
// update   PUT         /{id}
// delete   DELETE      /{id}
const express = require('express');
const app = express();
const router = express.Router();
const email_service = require( __dirname + '/../service/email-service');
//app.use("/email", email_service);

app.post('/', function(req, res){
    try {
        createEmail(res.body.email, res.body.subject, res.body.body, res.body.scheduleDateTime);
        //res.status(200).json(email);
        // var query1=request.body.var1;
        // var query2=request.body.var2;
        res.sendStatus('POST request to the homepage');
    } catch (err) {
        res.sendStatus(500);
    }
});

router.get('/', function(req, res){
    res.send('working');
});

router.put('/:id', function(req, res){
    res.send({type: 'PUT'});
});

router.delete('/:id', function(req, res){
    res.send({type: 'DELETE'});
});

module.exports = router;
app.listen(8080);
