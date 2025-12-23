import mongoose from "mongoose";

mongoose.set("bufferCommands",false)
const client =    await mongoose.connect("mongodb://admin:admin@localhost")
console.log("mongodb is connecting");

mongoose.set('autoCreate',false)
const UserModel=mongoose.model("User",{name:String})//second arghument is where we valiudate schema of our document 


const data= await UserModel.insertOne({name:"prathamesh"})
console.log("Document is created");
