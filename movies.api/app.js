var express = require('express');
var moviesRouter = require('./routes/movies');
var mongoose
var app = express();

app.listen(8080, function(){
    console.log("server is running on 8080 port");
});



app.use('/movies', moviesRouter);