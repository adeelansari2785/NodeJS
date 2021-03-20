var express=require('express')
var R1=require('./RouteMod')
var Rbook=require('./Bookroute')
var app=express()

// http://localhost:3000/books
app.use('/books',Rbook)

//http://localhost:3000/Students
app.use('/Students',R1)

var server=app.listen(3000, ()=>{console.log("Server is running at 3000")})

