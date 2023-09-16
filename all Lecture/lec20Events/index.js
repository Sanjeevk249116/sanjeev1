const EventEmitter=require('events');

const event=new EventEmitter();
event.on('say my name',()=>{
    console.log("sanjeev kushwaha")
})
event.emit('say my name');