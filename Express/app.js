import express from "express";
const app=express()
const port=4000;
app.disable("x-powered-by")
app.get("/",(req,res)=>{
    res.end("Hello World from Express js server")
    //int http what we do is res.end("our message ")  and also in http we have to explicitly setHeader in http response 
    //But in the res.send() we dont need to set header its alreay set by http res.send method 
    //send method implements res.end() and setHeader("Contetn-type both ")
    //in http when we do res.end("Our message")//browser consider its contetn type defaulty as text and its shown as text 
    //but in express res.send set contetn type as the text/html
    //res.send=res.setHeader("Contetn-Type","text/html") 
})

//same it listens as the http server
app.listen(port,()=>{
    console.log("App is listening on the port ",port);
    
})