import express from 'express';
const app = express();
const port = 4000;
app.disable('x-powered-by');

 
app.get(
    '/',
     (req, res,next) => {
    console.log("This middleware is called for every request to /");
    
    res.write("Hello World from Express js server\n");
     

    next()
},(req, res,next) => {
    console.log("This is the third middleware for /");
    res.write("Response from the third middleware \n");

next(err){
    error(err,req,res,next)
}})
const error= (err, req, res,next)=>{
    console.log("Error handling middleware called");    
    res.end("An error occurred: " ,err.message);
}

app.listen(port, () => {
  console.log('App is listening on the port', port);
});