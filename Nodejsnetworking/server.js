import dgram from "node:dgram";
const socket=dgram.createSocket('udp4') //event emitter means we can add diffrent types of events on this like it gives us back event 
// console.log(socket);//it has events 
// console.log(dgram);
// we have created the socket and will recive the events on it 
// like this 
socket.on("message",(a,b)=>{
    console.log(a,b);
    
})

//socket is object which is event emitter 
socket.on('listening',()=>{
    console.log(socket.address());
    
    console.log("listening the port ");
    
})
socket.bind()