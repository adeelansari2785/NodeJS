const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let ProductSchema=({
    name:{type:String,required:true,max:100},
    price:{type:Number,required:true,min:1}
});

module.exports=mongoose.model('Product',ProductSchema);