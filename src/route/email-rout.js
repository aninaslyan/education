// CRUD     RESTful (http methods)

// crate    POST        /
// read     GET         /{id}   /  - list    /email/:id
// update   PUT         /{id}
// delete   DELETE      /{id}
const express = require('express');
const router = express.Router();
const emailService = require( __dirname + '/../service/email-service');
const mongoose = require('mongoose');


// Connect to MongoDB and create/use database called todoAppTest
mongoose.connect('mongodb://localhost:27017/mydb');
// Create a schema
const email = new mongoose.Schema({
    email: String,
    subject: String,
    body: String,
    scheduleDateTime: { type: Date, default: Date.now },
    isSend: { type: Boolean, default: false },
    isRead: { type: Boolean, default: false }
});
// Create a model based on the schema
const Todo = mongoose.model('Email', email);

router.post('/', function(req, res){

    let Email = new Todo({email: "noreplyemail@mail.ru", subject: "The subject of email", body: "the body of the current email", scheduleDateTime: "Fri Aug 18 2017 15:36:49 GMT+0400 (GET)", isSend: false, isRead: false});

    Email.save(function(err){
        if(err)
            console.log(err);
        else
            console.log(Email);
    });


});

router.get('/', function(req, res){

    Todo.find(function (err, todos) {
        if (err) return console.error(err);
        console.log(todos);
        //console.log(Email);
        res.json(todos);
    });
});

router.get('/email/:id', function(req, res){
     Todo.find({ _id : {$gt:"5996deee6466dc0e5978c1d2"} }, function (err, results) {
        if (err) return console.error(err);
        console.log(results);
        //console.log(Email);
        res.json(results);
    });
});

router.put('/:id', function(req, res){
    Todo.findOneAndUpdate(
        { "email" : "noreplyemail@mail.ru" },
        { $set: { "email" : "noreply@bk.ru" } }, function(err, result){
            if (err) return console.error(err);
            console.log(result);
        }
    );
});

router.delete('/:id', function(req, res){
    res.send({type: 'DELETE'});
});

module.exports = router;