var express=require('express')

var app=express()

//http://localhost:3000/
app.get('/',(req,res)=>{
    res.send("Hello Class")
})
//http://localhost:3000/Books
app.get('/Books',(req,res)=>{
    res.send("Welcome to the Books Section")
})
//http://localhost:3000/Students
app.get('/Students',(req,res)=>{
    res.send("<h1>Welcome to the Students section</h1>")
})

app.post('/',(req,res)=>{
    res.send("You have sent a message to the server")
})
//http://localhost:3000/Students/4/books/78
app.get('/Students/:studentid/books/:bookid',(req,res)=>{
    res.send(req.params)
})


app.get('/example/b', function (req, res, next) { 
    console.log('the response will be sent by the next function ...')
    
    next() 
    }, function (req, res) { 
    console.log('Hello from B!') 
    }) 
    




var server=app.listen(3000,()=>{
    console.log("Server is up at port 3000")
})