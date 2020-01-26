/*
install the following
express
express-handlebars
mongoose
body-parser
nodemon
*/
/*--------------move this to connection.js file---------------------------
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
//--------------move this to connection.js file---------------------------*/

const connection=require("./model");
const express=require("express");
const application=express();
const path=require("path");//path is an in-built package in NodeJS
const expressHandlebars=require("express-handlebars");
const bodyparser=require("body-parser");//these are all the packages that you require.
//include the controller file
const StudentController=require("./controllers/students");

//setup the application for the bodyparser
application.use(bodyparser.urlencoded({
    extended:true
}));

//set up the views folder for the application:
application.set('views',path.join(__dirname,"/views/"));

//now create the engine, which is called Jade
application.engine("hbs",expressHandlebars({
    extname:"hbs",
    defaultLayout:"mainLayout",
    layoutsDir:__dirname+"/views/layout"
}));//mention the handlebars, mention extension, that is "hbs", and defaultlayout will be in views folder

//now tell nodejs that it has to use the view engine that has handlebars
application.set("view engine","hbs");
//setup application to send or handle route url
//handle the application GET request
application.get("/",(req,res)=>{
    //res.send("<h1>Hello World</h1>");
    res.render("index",{});//name of the template to render is index, and any data u want to send to the template {}
});

application.use("/students",StudentController);

application.listen("3000",()=>{
    console.log("Server started");
});
//to create proper views, we will use handle bars
