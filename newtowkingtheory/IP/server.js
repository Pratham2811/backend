import http from "http"
const server =http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'})
    res.end("Hello ,this is basic http server runnign on the 127.0.0.2\n")
})
server.listen(3000,'127.0.0.2',()=>{
    console.log("server is listenting on http:///127.0.0.2:3000");
    
})