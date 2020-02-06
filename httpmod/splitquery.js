const http=require('http');
const url=require('url');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.write(a=(q.message+" "));
    res.end(txt);
    //res.end('Server connected');
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');