import dgram from "node:dgram"
const client = dgram.createSocket("udp4")
const message = Buffer.from("Hello, UDP Server!")
client.send(message,4000,'localhost', (err) => {    
  if (err) {
    console.error("❌ Error sending message:", err)
  } else {
    console.log("✅ Message sent to UDP Server.")
  }
})

client.on("message",(msg,rinfo)=>{
console.log(`recived Package from the serve:${msg.toString()}`);
client.close();
})