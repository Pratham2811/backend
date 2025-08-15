import express from "express";
import fs from "fs/promises";
import path from "path";

const app = express();



app.get("/test", (req, res) => {
    const filePath= path.join("Swadesh.mkv");
  console.log(filePath);
    //getting file stats
    console.log(req.headers.range);
    
    fs.stat(filePath, (err, stats) => {
        if (err) {  
            console.log(err);
            return res.status(500).res.end("File not found")
        }
        const range=req.headers.range;
        const fileSize=stats.size;
        console.log(range);
        
        if(!range){
            res.writeHead(200,"OK",{
                "content:length": stats.size,
                "content-type": "video/mp4",
                "accept-ranges": "bytes",
                "content-disposition": "inline"
            })
            fs.createReadStream(filePath).pipe(res);
        }else{
            const parts=range.replace("bytes=","").split("-");
            const start=parseInt(parts[0],10);
            const end=parseInt(parts[1],10)    || fileSize-1;
            if(start>=fileSize || end>=fileSize ||start>end){
                res.end()
            }
            
        }
        })


//to replace all above code express built-in method give all fucntionality name res.sendFile("whole relative path of file ")

// res.sendFile(`${import.meta.dirname}/Swadesh.mkv`)
})
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}); 