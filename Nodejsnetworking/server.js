// // Import the 'dgram' module from Node.js core
// // It allows us to create UDP sockets
// import dgram from 'node:dgram';

// // Create a UDP socket using IPv4
// // This 'server' is a dgram.Socket instance and also an EventEmitter
// const server = dgram.createSocket('udp4');

// // ---------------------------
// // 1️⃣ Handle Incoming Messages
// // ---------------------------
// // This event is triggered when someone sends a UDP message to this server
// server.on('message', (msg, rinfo) => {
//   // 'msg' is a Buffer object containing the received data
//   // 'rinfo' = Remote Info (object with sender's address, port, and message size)

//   console.log(`📩 Received message: "${msg}"`);
//   console.log(`📍 From: ${rinfo.address}:${rinfo.port}`);
//   console.log(`📦 Message size: ${rinfo.size} bytes`);

//   // Prepare a response message to send back to the sender (client)
//   const response = Buffer.from("👋 Hello from UDP Server!");

//   // Send the response back to the client
//   server.send(response, rinfo.port, rinfo.address, (err) => {
//     if (err) {
//       console.error("❌ Error while sending response:", err);
//     } else {
//       console.log("✅ Response sent back to client.");
//     }
//   });
// });

// // ------------------------
// // 2️⃣ Handle Server Start
// // ------------------------
// // This event fires when the server successfully starts and binds to a port
// server.on('listening', () => {
//   // Get info about the address this server is bound to
//   const address = server.address(); // returns { address, port, family }

//   console.log(`🚀 Server is up and listening`);
//   console.log(`🔗 Bound on IP: ${address.address}`);
//   console.log(`🔢 Port: ${address.port}`);
//   console.log(`🌐 IP Version: ${address.family}`);
// });

// // ------------------------
// // 3️⃣ Handle Server Errors
// // ------------------------
// // This catches errors like if port is already in use, or permission denied
// server.on('error', (err) => {
//   console.error("💥 Server error occurred:", err.stack);
//   // Close the server safely
//   server.close();
// });

// // ------------------------
// // 4️⃣ Bind the Server to a Port
// // ------------------------
// // This is necessary to tell the server where to listen for messages
// // We'll use port 4000 and localhost as address

// server.bind({port:4000}, 'localhost');
// // You can also use just: server.bind(4000)
// // It will default to localhost or 0.0.0.0 depending on OS


import dgram from 'node:dgram';

const socket =dgram.createSocket('udp4')

socket.on("message",(message,rinfo)=>{
    console.log(message.toString());
    console.log(rinfo.address);
    console.log(rinfo.port);
    console.log(rinfo);
    socket.send("Message recived",rinfo.port,rinfo.address)
    
    
    
})
socket.bind({port:4000},"localhost",()=>{
    const address=socket.address()
console.log(`Server is running of port:${address.port}`);

})
// socket.send("Hii from node  brother ",3000,'192.168.43.1',)// aslo we can send the message to the client or server