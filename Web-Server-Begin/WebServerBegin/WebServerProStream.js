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

function fileAccess(filepath){
    return new Promise((resolve,reject)=>{
        fs.access(filepath,fs.F_OK,error=>{
            if(!error){
                resolve(filepath);
            }else{
                reject(error);
            }
        });
    });//gives either a resolved state or a rejected state
}
/*
function fileReader(filepath){
    return new Promise((resolve,reject)=>{
        fs.readFile(filepath,(error,content)=>{
            if(!error){
                resolve(content);
            }else{
                reject(error);
            }
        })
    });
}*/
function streamFile(filepath){
    return new Promise((resolve,reject)=>{
        let fileStream=fs.createReadStream(filepath);//is an event emitter, starts to read a file n throws open event
        fileStream.on('open',()=>{
            resolve(fileStream);
        });

        fileStream.on('error',error=>{
            reject(error);
        });
    });
}

function webserver(req,res){//callback
    //if the route requested is '/', then load 'index.htm' or else
    // load the requested files
    let baseURI=url.parse(req.url);
    let filepath=__dirname+(baseURI.pathname === '/' ? '/index.htm'  : baseURI.pathname);
    let contentType=mimes[path.extname(filepath)]; //mimes['.css']==='text/css'
    //console.log(filepath);
    //Check if the requested file is accessible or not
    fileAccess(filepath)
        .then(streamFile)
        .then(fileStream=>{
            res.writeHead(200,{'Content-type':contentType});
            //res.end(content,'utf-8');
            fileStream.pipe(res);
        })
        .catch(error=>{
            res.writeHead(404);
            res.end(JSON.stringify(error));
        });
}

http.createServer(webserver).listen(3000,()=>{console.log('Webserver running on port 3000');});