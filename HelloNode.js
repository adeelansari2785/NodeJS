'use strict'; // enables restrictive mode of JS, prevents inefficient code
//this will not be used in the future

//import http from 'http'; //create a constant, that no one else will use, this is ES6 version

//nodejs uses modules into files.
const http=require('http');
//the createServer() is asynchronous, it does not block the JS, it is part of http module. 
//it creates a server
http
    .createServer((req,res)=>{
        res.writeHead(200,{'Content-type':'text/html'}); //server sends a status code, writehead method accomplishes this
        res.end('<h1>Hello NodeJS</h1>');
    })
    .listen(3000,()=>console.log('Server running on port 3000'));