import dgram from "node:dgram"
const client = dgram.createSocket("udp4")
const message = Buffer.from("Hello, UDP Server !")
client.send(message,4000,'192.168.43.199', (err) => {    
  if (err) {
    console.error("❌ Error sending message:", err)
  } else {
    console.log("✅ Message sent to UDP Server and pratham.")
  }
})

client.on("message",(msg,rinfo)=>{
console.log(`recived Package from the server:${msg.toString()}`);
console.log(rinfo);

client.close();
})