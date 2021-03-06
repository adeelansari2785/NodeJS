const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let EmployeeSchema=new Schema({
    name:{type:String, required:true},
    designation:{type:String,required:true},
    department:{type:String, required:true},
    office:{type:String},
    salary:{type:Number}
});

module.exports=mongoose.model('Employee',EmployeeSchema);