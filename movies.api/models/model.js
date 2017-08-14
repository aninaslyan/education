var mangoose = require('mangoose');
var Schema = mangoose.Schema;

var movieModel = new Shema({
    title:String,
    genre:String,
    rating: Number,
    isReleased:{type:Boolean, default:true}
});
module.exports = mongoose.model("Movie, movieModel");