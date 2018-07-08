const hostname = '127.0.0.1';
const port = 3000;
const fs = require('fs');
const http = require('http');

fs.readFile('index.html',(error,html)=>{
    if(error){
        throw error;
    }

    const server = http.createServer((request,response) =>{
        response.statusCode = 200;
        response.setHeader('Content-type','text/html');

        if(request.url === '/banck/api/test'){
            console.log('This is the test call');
            response.write('This is the call to test fucntion');
            response.end();
        } else{
            response.write(html);
            response.end();
        }    
    });

    server.listen(port,hostname,() =>{
        console.log('Server started on port '+port);
    });

});