const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request,response)=>{
    response.statusCode =200;
    response.setHeader('Contect-type','text/plain');
    if(request.url === '/'){
        response.write('Answer from the server');
        response.end();
    }
    if(request.url === '/api/courses'){
        response.write(JSON.stringify(['Spring','Angular','NodeJs','Java']));
        response.end();
    }

});

server.listen(port,hostname,()=>{
    console.log('Listeninig on port '+port);
});

server.on('connection',(WebSocket)=>{
    console.log('the client is calling the server');
    return 'Hi, how are you';
});



