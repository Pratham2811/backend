import express from "express"
import multer from "multer";
import { log } from "node:console";
import path from "node:path";
import cors from"cors"
 const app=express();
 app.use(cors())
 const PORT=4000
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const extension=path.extname(file.originalname)
    const id=crypto.randomUUID();
    console.log(id);
    
    cb(null, `${id}${extension}`)
  }
})

const upload = multer({ storage: storage })
 app.get("/",(req,res)=>{
        res.send("Hello world")
 })

//  app.post("/upload",upload.single("profilePic"),(req,res)=>{
  
  
        
//     res.json({message:req.file});
    

//  })
 app.post("/upload",upload.fields([
  {name:"profilePic",maxCount:1},
  {name:"photos" ,maxCount:5}
 ]),(req,res)=>{
  
  
        console.log(req.body);
        console.log(req.files);
        
        
    res.json({message:req.files});


 })
 app.listen(PORT,()=>{
    console.log("server started on port 4000");
    
 })