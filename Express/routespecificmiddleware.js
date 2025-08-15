import express from "express";
const app = express();
const port = 4000;

// app.use((req, res, next) => {
//   console.log("Global middleware: matches ALL routes");
//   next();
// });

// app.use("/api", (req, res, next) => {
//   console.log("Middleware for /api");
//   next();
// });

// app.use("/api/users/", (req, res, next) => {
//   console.log("Middleware for /api/users");
//   res.send("Done");
// });
app.use(express.json())
app.use("/admin", (req, res, next) => {
  if(req.body.password==="admin"){
    next();
  }else{
    res.end("Access denied");
  }
});
app.use("/admin", (req, res, next) => {
  console.log("Middleware for /admin");
  res.send("Admin route accessed");
});
app.listen(port, () => console.log(`Listening on ${port}`));
