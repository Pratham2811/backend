const http=require('http')
const server=http.createServer((req,res)=>{
    console.log("Hello From Node.js srver.js");
    res.end("Hello From Node.js srver.js");

})
server.listen(3000);