import http from "http"
const server=http.createServer((request,response)=>{
    console.log("Got the Request");
    console.log(request.method);
    
    console.log(request.url);
    
    
    request.on("data",(data)=>{
        console.log(data.toString());

        
    })
    response.end("Hello from the server")

});
server.listen(80,()=>{
    console.log("Server is listening on port 4000");

    
})