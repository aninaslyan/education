// CRUD     RESTful (http methods)

// crate    POST        /
// read     GET         /{id}   /  - list    /email/:id
// update   PUT         /{id}
// delete   DELETE      /{id}
const express = require('express');
const router = express.Router();
const emailService = require( __dirname + '/../service/email-service');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb');

const email = new mongoose.Schema({
    email: String,
    subject: String,
    body: String,
    scheduleDateTime: { type: Date, default: Date.now },
    isSend: { type: Boolean, default: false },
    isRead: { type: Boolean, default: false }
}, {
    versionKey: false
});
// Create a model based on the schema
const Todo = mongoose.model('Email', email);

router.post('/', function(req, res){

    let Email = new Todo({email: "noreplyemail@mail.ru", subject: "The subject of email", body: "the body of the current email", scheduleDateTime: "Fri Aug 18 2017 15:36:49 GMT+0400 (GET)", isSend: false, isRead: false});

    Email.save(function(err, todos){
        if(err)
            console.log(err);
        else
            console.log(Email);
        res.json(todos);

    });

});

router.get('/', function(req, res){

    Todo.find(function (err, todos) {
        if (err) return console.error(err);
        console.log(todos);
        res.json(todos);
    });
});

router.get('/email/:id', function(req, res, db){

   Todo.find({_id: req.params.id}, function(err, todos){
       if (err) res.json(err);
       else res.json(todos);

   }).select({ "email": 1, "_id": 1});

});


router.put('/:id', function(req, res){
    Todo.findOneAndUpdate({_id: req.params.id}, {$set: {email: 'mymail@gmail.com'}}, function(err, todos){
            if (err) return res.json(err);
            else res.json(todos);
        }
    );
});


router.delete('/:id', function(req, res, obj){
    Todo.remove({_id: req.params.id},
        function(err){
            if(err) res.json(err);
            else    res.json("one row deleted");
        });
});
module.exports = router;