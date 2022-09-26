const EventEmitter = require('events');
const emmiter = new EventEmitter();

emmiter.on('messagelogged',function(arg){
    console.log('listener called', arg);
});


emmiter.emit('messagelogged', { id: 1, url:'http//'});