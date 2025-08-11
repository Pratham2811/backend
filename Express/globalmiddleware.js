import express from 'express';
const app = express();
const port = 4000;
app.disable('x-powered-by');

 
//app.use() is the global middleware function that is excuted for every http request and every request url 
//app.all() is used to handle all HTTP methods for a specific route.
console.log(app.all);

//logging middleware function that runs for every request
//and every request url
//what matters is position of the glpbal middleware if the middleware is misplaced then global middleware is not called 


//login route
//this route is called when the user tries to login



app.use((req, res, next) => {
      console.log("This is a middleware function that runs for every request  and every request url ");
    //  console.log(req.url);
     const [url,queryParameter]=req.url.split("?")
   
     const queryParams={}
     const params=queryParameter?.split("&")
     console.log(params);
     params.forEach((param)=>{
      const [key, value]=param.split("=")
      queryParams.key=value;
        })
        console.log(queryParams);
        
   
     res.write("Hii")
     next()
     
       // Call next() to pass control to the next middleware or route handler
})
app.get('/user', (req, res, next) => {
  console.log("This middleware is user middleware");  
  res.end("Prathamesh Madane\n");
  next();
})
app.get('/login', (req, res, next) => {
  console.log("This middleware is called for every request to /");  
  res.end("Hello World from Express login route\n");
})

app.listen(port,()=>{
  
  console.log(`App is listening on the port ${port}`);
});

