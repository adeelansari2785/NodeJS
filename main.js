const http=require("http");
http.createServer(function(request,response){
    //send the http header
    //HTTP Status:200:OK
    //Content Type:text/plain
    response.writeHead(200,{'Content-Type':'text/plain'});
    //Send the response body as "Hello world"
    response.end('Hello world Test\n');
}).listen(8081);
//Console will print the message
console.log('Server running at http://127.0.0.1:8081/');