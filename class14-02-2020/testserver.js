'use strict';
const http=require("http");
const url=require("url");

let routes={
    'GET':{
        '/':(req,res)=>{
                res.writeHead(200,{"Content-type":"text/html"});
                res.end("<h1>Hello Router</h1>");
            },
        '/about':(req,res)=>{
                res.writeHead(200,{"Content-type":"text/html"});
                res.end("<h1>About Us Page</h1>");
            },    
        },
    'NA':
    (req,res)=>{
        res.writeHead(404);
        res.end("Content not found");
    }
}

function router(req,res){
    let baseURI=url.parse(req.url,true);
    
    console.log("Requested route:",req.url);
    console.log("Requested method:",req.method);
    console.log("Requested route:",baseURI.pathname);
    let resolveroutes=routes[req.method][baseURI.pathname];
    if(resolveroutes!=undefined){
        resolveroutes(req,res);
    }else{
        routes['NA'](req,res);   //content not found
    }
}

http.createServer(router).listen(3000,()=>{console.log("Server is running on port 3000")});