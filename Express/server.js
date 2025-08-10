import express from 'express';
const app = express();
const port = 4000;
app.disable('x-powered-by');

// This is the main entry point of the Express application
// It sets up the server to listen on a specified port and handles requests to the root path


//we will learn middleware in express
// Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
// They can perform operations on the request and response objects, end the request-response cycle, or call the next middleware function in the stack.
// Middleware functions can be used for various purposes, such as logging, authentication, error handling, etc.
// In Express, middleware functions are executed in the order they are defined in the application.

//request handler middleware function
//second is error handling middleware function
//third is built-in middleware function 
app.get(
    '/',
     (req, res,next) => {
    console.log("This middleware is called for every request to /");
    
    res.write("Hello World from Express js server\n");
     
    //this function is called the request handler as well as the middleware`    
    //in express we can add multiple middleware functions
    //and they are called in the order they are added
    //we wil see the middleware now 
    //to call next middle ware we use the next()function
    //we take next function as argument in the request handler or middleware function
    next()
},(req, res,next) => {
    console.log("This is the third middleware for /");
    res.write("Response from the third middleware \n");
   
    //if we write after end then it will not work
    //as the response is ended and no more middleware will be called
    //if we want to send response from the last middleware then we dont need to call next()
    //if we call next() after res.end() then it will throw an error
    //now we will learn about thee error handling middleware function
    //error handling middleware function is used to handle errors in the application
next()
},(err, req, res,next)=>{
    console.log("Error handling middleware called");    
    res.end("An error occurred: " ,err.message);
})
//request handler middleware function on takes 2 or 3 arguments
//if we want to handle errors then we need to add error handling middleware function
//error handling middleware function takes 4 arguments
//the first argument is the error object
//error handler is called when there is error in application and asw well as we pass any argument or anthing in next() function

app.listen(port, () => {
  console.log('App is listening on the port', port);
});