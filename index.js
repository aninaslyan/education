const express = require('express');
const bodyParser = require('body-parser');
const emailRout = require('./src/route/email-rout');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', emailRout);
app.listen(3000);




// Email.find(function (err, todos) {
//     if (err) return console.error(err);
//     console.log(todos);
// });

//
// const MongoClient = require('mongodb').MongoClient;
// const url = "mongodb://localhost:27017/mydb";
//
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var myobj = { email: "myemail@gmail.com", subject: "new email", body: "comment of the body",
//                   scheduleDateTime: Date.now() };
//     db.collection("email").insertOne(myobj, function(err, doc) {
//         if (err) throw err;
//         //console.log("1 document inserted");
//         console.log(doc);
//         db.close();
//     });
// });

