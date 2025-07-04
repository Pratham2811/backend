class MyEventEmitter{
    on(eventName,handler){
        if(this._events[eventName]){
             this._events[eventName].push(handler);
        }
    else{
        this._events[eventName]=[handler];
    }
}
emit(eventName){
   this._events[eventName]?.forEach(event => {
    event();
   });

    
}
}
const event=MyEventEmitter();
event.on('x',()=>{
    console.log('created my own wvwnt emitter ');
    
})