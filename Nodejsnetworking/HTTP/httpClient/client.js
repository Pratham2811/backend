import http from "http"
const clientRequest=http.request({method:"POST",host:"192.168.165.87",});//new mwthod to create request or creatinf client --wathc
clientRequest.end("Hello from client")
clientRequest.on("response",(response)=>{
   response.on("data",(chunk)=>{
    console.log(chunk.toString());
    
   });
    
})