'use strict';
const http=require('http');
const url=require('url');
const fs=require('fs'); //this module allows reading and writing to a file
const path=require('path');
let mimes={
    '.htm':'text/html',
    '.css':'text/css',
    '.js':'text/javascript',
    '.gif':'image/gif',
    '.jpg':'image/jpeg',
    '.png':'image/png',
}

function webserver(req,res){//callback
    //if the route requested is '/', then load 'index.htm' or else
    // load the requested files
    let baseURI=url.parse(req.url);

    let filepath=__dirname+(baseURI.pathname === '/' ? '/index.htm'  : baseURI.pathname);
    //console.log(filepath);
    //Check if the requested file is accessible or not
    fs.access(filepath,fs.F_OK,error=>{//callback
        if(!error){
            //read and serve the file over response
            fs.readFile(filepath,(error,content)=>{//callback
                if(!error){
                    console.log('Serving: ',filepath);//to get a visual of what routes are being served
                    //resolve the content type
                    //serve the file from the buffer
                    let contentType=mimes[path.extname(filepath)]; //mimes['.css']==='text/css'
                    res.writeHead(200,{'Content-type':contentType});
                    res.end(content,'utf-8');//html pages are encoded in this format utf-8
                }else{
                    //serve a 500
                    res.writeHead(500);
                    res.end('The server could not read the file requested.');
                }
            });
        }else{
            res.writeHead(404);
            res.end('Content not found!');
        }
    }); //F_OK checks to see whether the file is accessible or not
}

http.createServer(webserver).listen(3000,()=>{
    console.log('Webserver running on port 3000');
});