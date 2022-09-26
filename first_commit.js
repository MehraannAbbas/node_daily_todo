const EventEmitter = require('events');
const emmiter = new EventEmitter();

emmiter.on('messagelogged',function(){
    console.log('listener called');
});

emmiter.emit('messagelogged');