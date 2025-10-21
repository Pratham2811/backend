import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"
const app = express();
const PORT = 4000;


app.use(cookieParser())
app.use(cors({
  origin: "http://127.0.0.1:5500",
  credentials: true,
}));

app.get("/", (req, res) => {
  console.log("Client cookies:", req.headers.cookie);

  // res.setHeader("Set-Cookie", [
  //   `name=prathamesh; HttpOnly; SameSite=None secure`,
  //   `myTime=${encodeURIComponent(new Date().toLocaleTimeString())}; SameSite=None secure`,
  //   `email=prathameshmadane09@gmail.com`,

  // ]); //this way we can set cookies but h=there is also another way to set cookies 
  //we have another method called res.cookie

  res.cookie("name","Prathamesh",{
    sameSite:"none",
    secure:true,
    httpOnly:true,
    maxAge:60*1000

  })
    res.cookie("age","19",{
    sameSite:"none",
    secure:true,
    httpOnly:true,
    maxAge:60*1000

  })
   console.log(req.cookies);
   
  res.json({ message: "Cookies sent successfully!" });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://127.0.0.1:${PORT}`);
});
