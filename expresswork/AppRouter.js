var birds = require('./RouteMod') //router is in RouteMod.js
var express=require('express');
var app=express();

// ...

app.use('/birds', birds)

var server=app.listen(3000,()=>{console.log("Connected")});