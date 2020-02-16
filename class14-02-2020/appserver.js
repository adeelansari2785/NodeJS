const http=require("http");

http.createServer(
    (req,res)=>{
        var url=req.url;

        if(url==="/"){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end("<h1>Welcome to Home Page</h1>");
        }else if(url==="/about"){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end("<h1>About Us</h1>");
        }else{
            res.writeHead(404,{"Content-Type":"text/html"});
            res.end("Page Not Found");
        }
    }    
).listen(3000,()=>{console.log("Server is at port 3000");})