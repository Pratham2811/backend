import { Socket } from "node:dgram";
import http from "node:http"
const server=http.createServer((request,response)=>{
    console.log("Got the request");
    response.setHeader("content-Length","23")
    response.setHeader("Access-Control-Allow-Origin","*")
    response.write("Hiiii from the node js ")

    //information of all about header like host host name ,connection accept refere 
    // console.log( request.headers);
    //gives url from where request is coming 
  console.log(  request.url);
  
    //gives method of request post get this type of request 
console.log(    request.method);


    //when http server on data event if you got data on data event then headers come and but in request data even headers are no shown 
     
    //on this request we only get the data of request body and not header but on socket we get everythings which is there on socket

    request.on("data",(data)=>{
        console.log("Got data on request");
        
        console.log(data.toString());
        
    })
    

    
})
// server.on("connection",(Socket)=>{
//     Socket.on("data",(data)=>{
//         console.log("Got Data on socket");
        
//         console.log(data.toString());

        
//     })
// })
//as we call createserver() object is thrown to server varibale 

//we uses the same way like tcp for the http server
// server.on("connection",(socket)=>{
//     console.log("New connection established");
    
//     socket.write("HTTP/1.1 200 OK\n\n");
//    socket.end("Hi there! Welcome to the server.\n");
  
//    socket.on("data",(data)=>{
//        console.log("Received data:", data.toString());
//    })
// })

//in htttp there is another syntax as well on request event instead of socket object we (req,res) object is passed
//here req is the request object and res is the response object
//here request is readable stream and response is writable stream of tcp
// server.on("request",(req,res)=>{
//     console.log("New request recives mean client is trying to access the server");

//     //wedont get data event on response but we get it on request object
//     //we can get the data from request object using data event beacuase it is a readable stream
//     req.on("data",(data)=>{
//         console.log("Received data:", data.toString());
//     })
//     res.write("Hello this written by response object\n");
//     res.write("This is second line written by response object\n");
//     // res.end("This is the end of response\n");
//     //res.end() is used to end the response and send it to the client 

//     ///to set header of the response we can use setHeader method
   
//     res.setHeader("content-Length","10")
// })

server.listen(4000,()=>{
    console.log("Server is listening on port 4000");
    
})