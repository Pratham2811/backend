import http from "http"
const server=http.createServer((req,res)=>{
    // res.setHeader("Content-Type","text/html")
    res.write("Hiii ")
    res.end("Hello world")
})

server.listen(3000,()=>{
    console.log("server is listening on port 4000");
    
})