var express = require('express');
var moviesRouter=require('./routes/moviesRouter');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');

var db=mongoose.connect("mongodb://localhost/MoviesDb");


var app = express();
app.use(bodyParser.json());

app.listen(8080, function () {
    console.log("server is running on 8080");
});


app.use('/movies',moviesRouter);
