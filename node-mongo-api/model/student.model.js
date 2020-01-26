const mongoose=require("mongoose");

//create scheme

var StudentSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:"Required"
    },
    last_name:{
        type:String
    },
    gender:{
        type: String
    },
    city:{
        type:String
    },
    country:{
        type:String
    }
});

mongoose.model("student",StudentSchema);//this line connects the collection with the model.