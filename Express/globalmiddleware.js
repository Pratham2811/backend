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


//JSON body  parsing/ we are doing parsing of the request body here (custom middleware)//not good if there is a lot of sata then it will fail
//this is custom parsing middleware that parses the request body and attaches it to the request object
app.use(express.json()); // Built-in middleware to parse JSON bodies 


app.use((req, res, next) => {
     req.on("data", (data) => {
      const reqBody=JSON.parse(data.toString())
    req.body = reqBody; // Attach the parsed body to the request object
  });   
   req.on("end", () => {
      console.log("Request body parsed successfully");
     next()});
       // Call next() to pass control to the next middleware or route handler
})


// app.get('/user', (req, res, next) => {
//   console.log("This middleware is user middleware");  
//   res.end("Prathamesh Madane\n");
//   next();
// })


// app.post('/user', (req, res, next) => {
//   console.log("This middleware is user post middleware"); 
//   res.end("Prathamesh Madane from post method\n");
//   console.log(req.body); // Access the parsed body
  
//   next()
// });

  
// app.get('/login', (req, res, next) => {
//   console.log("This middleware is called for every request to /");  
//   res.end("Hello World from Express login route\n");
// })
// const jsonParser = express.json();
// console.log(jsonParser);

app.listen(port,()=>{
  
  console.log(`App is listening on the port ${port}`);
});

