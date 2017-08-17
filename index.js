const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const email_rout = require("./src/route/email-rout");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use("/email", email_rout);
app.use('/api', email_rout);

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db, res) {
    if (err) throw err;
    var myobj = { email: "myemail@gmail.com", subject: "new email", body: "comment of the body",
                  scheduleDateTime: Date.now() };
    db.collection("email").insertOne(myobj, function(err, res) {
        if (err) throw err;
        //  console.log("1 document inserted");
        //console.log(res);
        db.close();
    });
});

module.exports = app;
module.exports = bodyParser;
module.exports = mongoose;