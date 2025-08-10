import express from "express"

const app=express();
const port=4000;
app.disable('x-powered-by');        
app.get(
    '/', (req,res,next)=>{
    console.log("This middleware is called for every request to /");
    res.end("Hello World from Express js server\n");
    req.on("data", (chunk) => {
        console.log(`Received chunk: ${chunk}`);    
    })
    
    } )
    app.get("/login",(req,res,next)=>{
        console.log("This is the login route");
        res.end("Login successful");
    })
app.get("/logout",(req,res,next)=>{
    console.log("This is the logout route");
    res.end("Logout successful");
})
app.post("/",(req,res,next)=>{
    console.log("This is the post route");
    res.end("Post home route");
})
app.patch("/",(req,res,next)=>{
    console.log("This is the post route");
    res.end("patch home route");
})
app.delete("/",(req,res,next)=>{
    console.log("This is the post route");
    res.end("delete home route");
})
app.put("/",(req,res,next)=>{
    console.log("This is the post route");
    res.end("put home route");
})
app.listen(port,()=>{
    console.log('App is listening on the port', port);
})