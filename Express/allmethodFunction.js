import express from "express"

const app=express();
const port=4000;
app.disable('x-powered-by');        
   console.log(app.all);
   
app.use((req, res, next)=>{
    if(req.method==='GET'){
        console.log("This is a GET request");
        res.end("GET request handled"); 
    }else if(req.method==='POST'){
        console.log("This is a POST request");
        res.end("POST request handled");    
}else if(req.method==='PATCH'){
        console.log("This is a PATCH request"); 
        res.end("PATCH request handled");
    }else if(req.method==='DELETE'){    
        console.log("This is a DELETE request");
        res.end("DELETE request handled");
    }else if(req.method==='PUT'){
        console.log("This is a PUT request");   
        res.end("PUT request handled");
    }else if(req.method==='OPTIONS'){
        console.log("This is an OPTIONS request");
        res.end("OPTIONS request handled"); 
    }else{
        console.log("This is an unknown request");
        res.end("Unknown request handled");
    }

})



app.listen(port,()=>{
    console.log('App is listening on the port', port);
})