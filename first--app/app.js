function sayHello(name){
    console.log('Hello '+name);
}

sayHello('Jose Vicente');

const fs = require('fs');
const files = fs.readdirSync('./');
console.log(files);

fs.readdir('./', function(err,files){
    if(err){
        console.log('Error',err);
    }else{
        console.log('List of files from async call '+files);
    }
});

const EventEmitter = require('events');
const emmitter = new EventEmitter();

emmitter.on('messageLogged',function(arguments){
    console.log('Listener called '+arguments);
});

emmitter.emit('messageLogged',{id:1,url:'http://'});
