'use strict';
const http=require('http');
const url=require('url');
const qs=require('querystring');

let routes={
    'GET':{
        '/':(req,res)=>{//route router is accessed
            res.writeHead(200,{'Content-type':'text/html'});
            res.end('<h1>Hello Router</h1>');
        },
        '/about':(req,res)=>{
            res.writeHead(200,{'Content-type':'text/html'});
            res.end('<h1>This is the about page</h1>');
        },
        '/api/getinfo':(req,res)=>{
            //fetch data from db and respond as JSON
            res.writeHead(200,{'Content-type':'application/json'});
            res.end(JSON.stringify(req.queryParams));
        }
    },
    'POST':{
        '/api/login':(req,res)=>{
            let body='';
            req.on('data',data=>{
                body+=data;
                //console.log(body.length);
                if(body.length>2097152){
                    res.writeHead(413,{'Content-type':'text/html'});
                    res.end('<h3>Error: The file being uploaded exceeds the 2mb limit</h3>',()=>req.connection.destroy());
                }
            });
            req.on('end',()=>{
                console.log(body);
                let params=qs.parse(body);
                console.log('Username: ',params['username']);
                console.log('Password: ',params['password']);
                //Query a db to se if the user exists
                res.end();
            });
        }
    },
    'NA':(req, res)=>{
        res.writeHead(404);
        res.end('Content not found!');
    }
}

function router(req,res){
    let baseURI=url.parse(req.url, true);
    //console.log('Requested route:',req.url);
    //console.log('Request method', req.method);
    //console.log('Request route', baseURI);
    let resolveRoute=routes[req.method][baseURI.pathname];
    if(resolveRoute!=undefined){
        req.queryParams=baseURI.query;
        resolveRoute(req,res);  //resolveRoute is GET
    }else{
        routes['NA'](req,res);   //content not found
    }
}

http.createServer(router).listen(3000,()=>{
    console.log('Server running on port 3000');
});