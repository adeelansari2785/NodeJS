const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let BookSchema=new Schema({
    title:{type:String,required:true},
    isbn:{type:Number, required:true},
    longDescription:{type:String,required:true},
    status:{type:String,required:true}
});

module.exports=mongoose.model('Book', BookSchema);