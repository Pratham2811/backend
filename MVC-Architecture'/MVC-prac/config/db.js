import mongoose from "mongoose";
const MONGOURI=  "mongodb://admin:admin@localhost:27017/todoApps?authSource=admin"

try{
    const client=await mongoose.connect(MONGOURI);
    console.log("Database Connected");
    
}catch(error){
       
console.log("error connecting to the mongodb",error);


}