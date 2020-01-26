//nodejs will connect with mongodb via mongoose
const mongoose=require("mongoose");
//write the constring to the db
mongoose.connect("mongodb://localhost:27017/Test",{ useNewUrlParser: true, useUnifiedTopology: true },(error)=>{
    if(!error){
        console.log("Success Connected");
    }else{
        console.log("Error connecting to database.")
    }
});
//tip:in package.JSON, add "start":"nodemon index.js", and in terminal, type npm start, it will run index.js
//import the model
const student=require("./student.model");