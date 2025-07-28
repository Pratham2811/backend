
import { createReadStream } from "node:fs";
import net from "node:net"

const server=net.createServer((Socket)=>{
    console.log("client Connected");
   //if we go added like this code will be messy so we add like // Socket.write("HTTP/1 200 OKAY \nAccess-control-Allow-Origin:*\nAccess-Control-Expose-Headers:* \n\n Hello")//thoruoght this we can send text from server to broweser and this text is readable on browser 
   Socket.write("HTTP/1.1 200 OK\n\n");

   Socket.write("Access-Control-Allow-Origin:*\r\n")
Socket.write("Access-Control-Expose-Headers:*\r\n")
   Socket.write("Content-Type: text/plain; charset=utf-8\r\n");
Socket.write("\r\n"); // Very important: separates headers and body

//    Socket.write("content-Length:4")
 /// headers = HTTP is header like "HTTP/1\n\n Hello"

 //here hello is the actual  resposne or data or data of response and seprated by the \n\n and before it is header HTTP 

 //here is if a;; is ok good 
 //then status code is 200 OK when browser gets proper response 
 //we can set status code and text as well as we want 
 //"HTTP/1 200 OKK " we can add this in header and this status code will be showm on status bar or network section of browser \
//its status code and status message
//this is not actual header bro this just status code actual headers starts from here 
//we write actual header in nw line \n
//"HTTP/1 200 OKAY \n Actual headers to write here\n\n response data "
//broweser uses access control for diffrenet origin so it use it header if other are not aloowed then cross origin device can not acess server 


//IMP 

//Like browser block fetch request by default when cross origin is detected 
//like the same way we can not access the headers from javascript we need to give permissin to if we want fetch the headers 
//this is done by server by setting headers in both cases 
//for each permission to be givin we need its headers and generally we write headers in next line
//when we see headers in consle then it is value 

    Socket.on("data",(data)=>{
        console.log(data.toString());
        
    })
    const readStream=createReadStream("num.txt")
    readStream.pipe(Socket);
    readStream.on("end",()=>{
        console.log("File ended Reading");
        
    });
    readStream.on("error",(error)=>{
        console.log(error);
        
    })
    Socket.on("error",(error)=>{
        console.log(`Error While on Socket: ${error}` );
        
    })

    
 Socket.end()
})

server.listen(4000,()=>{
    console.log("Server is listening on port 4000");
    
})