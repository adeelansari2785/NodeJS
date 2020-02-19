var express = require('express');
var app = express();

app.get('/users/:userId/books/:bookId', function (req, res) { 
    res.send(req.params) 
    });
    
var server=app.listen(3000,()=>{});
    
/*
Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }
*/