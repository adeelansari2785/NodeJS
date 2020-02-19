var express = require('express');
var app = express();

app.get('/example/b', function (req, res, next) { 
        console.log('the response will be sent by the next function ...');
        next(); 
    }, function (req, res) { 
        res.send('Hello from B!'); 
    }) ;
    var server=app.listen(3000,()=>{});