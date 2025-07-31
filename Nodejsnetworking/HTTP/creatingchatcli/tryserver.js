import { createReadStream, createWriteStream } from "node:fs";
import net from "node:net"
let clientCount=0;
let clientsList=[];
const server=net.createServer((socket)=>{
    socket.write("Enter your username: ")
    // console.log(clientsList);
    let userName=''
    let isuserNameset=false;
  
   
  socket.on("data",(data)=>{
    const message=data.toString().trim()
    
  
    
    if(!isuserNameset){
        userName=message;
        isuserNameset=true;
        socket.write(` welcome: ${userName}!\n`)
        clientsList.push({socket,userName})
        return;
    }
    //for the text file

    // if(message.startsWith("FILE:")){
    //     clientsList.forEach((client)=>{
    //         if(client.socket!==socket){
    //             client.socket.write(message);
    //         }
    //     })
    //     return;
    // }

     const dataHandler=(data)=>{
    const message=data.toString()
      clientsList.forEach((client)=>{
    if(client.socket!==socket){
        client.socket.write(`${userName }: ${message} `)
    }
   })
   }
    if(message.startsWith("FILE:")){
 
        
        const parts =message.split(":")
        console.log(parts);
        
        const fileName=parts[1]
        const fileSize=parseInt(parts[2],10)
     console.log("📝 File Header Received:");
  console.log("File Name:", fileName);
  console.log("File Size:", fileSize, "bytes");
  //broadcasting file
 
    const savePath = `./received_${userName}_${fileName}`;
    const writeStream = createWriteStream(savePath);

    let receivedBytes = 0;
    socket.removeAllListeners("data",dataHandler);
     const header=message
     clientsList.forEach((client)=>{
        if(socket!==client.socket){
            client.socket.write(header)
        }
     })
    socket.on("data",(data)=>{
        writeStream.write(data)
        receivedBytes+=data.length;

        //broadcast to others
       
        clientsList.forEach((client)=>{
            if(client.socket!==socket){
                client.socket.write(data)

            }
        })
        if(receivedBytes>=fileSize){
            writeStream.end(()=>{
                console.log(`File saved to ${savePath}`);
                socket.on("data",dataHandler)
                 
            })
        }
    })

    }else{
        clientsList.forEach((client)=>{
            if(client.socket!==socket){
                client.socket.write(`${userName}: ${message}`)
            }
        })
        
    }
  
  })
   socket.on('error', (err) => {
  clientsList = clientsList.filter(client => client !== socket);
  console.log("Client disconnected with error:", err.message);
});
    socket.on("end",()=>{
        clientsList=clientsList.filter(client=>client!==socket);
        console.log("Clietn disconneted gracfully");
        
    })
})
server.on("error",(error)=>{
    console.log("Error on server: ",error.message);
    
})
server.listen(4000,()=>{
    console.log("Server is listening on port : 4000");
    
})