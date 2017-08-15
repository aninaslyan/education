var express = require('express');

var app = express();

app.listen(8080, function(){
    console.log("my running server llll");
});

app.get('/', function(req, res){
    res.send("express js");
});

app.get('/books', function(req, res){
    res.send("Books");
});

app.get('/authors', function(req, res){
    res.send("Authors");
});