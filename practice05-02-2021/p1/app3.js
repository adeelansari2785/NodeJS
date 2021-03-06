const http=require('http');
var dt=require('./app2');

http.createServer((req,res)=>{
    res.write("The date is: "+dt.myDateTime());
    res.end()
}).listen(8080,()=>{console.log('Server is running on port 8080')})