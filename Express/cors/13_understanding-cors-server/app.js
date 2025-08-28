import express from "express";

const app = express();
const PORT = 4000;
 app.use(express.static("public"))
app.get("/api", (req, res) => {
  const origin= req?.headers?.origin;
  console.log(origin);
  
  const allOrigin=[
    "http://127.0.0.1:5500",
    "http://127.0.0.10:5500",
     "http://127.0.0.11:5500"
  ]
 if(allOrigin.includes(origin)){
  res.setHeader("Access-Control-Allow-Origin",origin)
 }
  res.json({ message: "Hello, world get!" });
});

app.post("/api", (req, res) => {
  res.json({ message: "Hello, world post!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
