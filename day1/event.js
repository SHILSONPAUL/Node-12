// var event = require('events');
// var eventEmit = new event.EventEmitter();
// function RingBell(){
//     console.log('ring ring ring');
// }
// eventEmit.on('doorOpen',RingBell);
// eventEmit.emit('doorOpen');
/* Event  */
var event = require('events');
var eventEmit = new event.EventEmitter();
eventEmit.on('myEvent',(arg1,arg2)=>{
console.log('Id is:'+arg1+'\nName is:'+arg2);
});
eventEmit.emit('myEvent',12,'Rahul K P');
