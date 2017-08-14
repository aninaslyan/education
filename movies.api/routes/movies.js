var express = require('express');
var moviesController = require('./../controller/moviescontroller');

var moviesRouter = express.Router();

moviesRouter.route('')
    .get(moviesController);

module.exports = moviesRouter;