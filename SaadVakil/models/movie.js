const mongoose=require('mongoose');

const MovieSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:5,
        maxlength:15
    },ratings:{
        type:Number,
        required:true
    }
})

const Movie=mongoose.model("Movie",MovieSchema);// "Movie" is the name of the collection, 

module.exports.Movie=Movie;
module.exports.MovieSchema=MovieSchema;