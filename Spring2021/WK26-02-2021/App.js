const http=require('http');

var dt=require('./myfirstmodule')

/*     
this 
is a multiline comment
*/
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write("Hello World\n Today is "+ dt.GiveDate())
    res.write("\n"+dt.PrintMyName())
    res.end("Killing the response object here")
}


).listen(8080, ()=>{
    console.log("The server is running on port 8080")
})

