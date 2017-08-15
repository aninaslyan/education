var Movie = require('./../models/model');

var get = function(req, res){
    //res.send("list of movies");
    Movie.find(function(err, movies){
        if(err){
            res.status(500);
            res.send("internal server error");
        }
        else{
            res.status(200);
            res.send(movies);
        }
    });
};

var add = function (req, res) {
    var movie = new Movie(req.body);
    movie.save(function (err) {
        if(err){
            res.status(500);
            res.send("Failed");
        }
        else{
            res.status(201);
            res.send(movie);
        }
    });
};

// module.exports.get = get;
// module.exports.add = add;
module.exports = {
    add: add,
    get: get
};