import express from "express";
const app = express();

app.use(express.json());

// CORS middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500"); // ✅ correct origin
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(204); // preflight handled
  }
  next();
});


app.put("/api/data", (req, res) => {
    console.log("request came");
    
  res.json({ message: "PUT request successful", data: req.body });
});

app.listen(4000, () => console.log("Server running on 4000"));
 