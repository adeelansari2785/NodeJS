const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const {mongoose}=require('./db');
var employeeController=require('./controllers/employeeController');

var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({origin:'http://localhost:4200'})); //this will allow cross-communication of NodeJS with Angular App
app.use('/employees',employeeController);
app.listen(3000,()=> console.log('Server started at port: 3000'));

