var express=require('express');
var app=express();

app.get('/', (req,res)=>{
    res.send("Welcome to Router");
})

var server=app.listen(3000,()=>{});