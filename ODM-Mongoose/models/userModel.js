import mongoose from "mongoose";
console.log("start running");

const UserModel=mongoose.model("User",{name:String})//second arghument is where we valiudate schema of our document 


const data= await UserModel.find()
console.log(data);

console.log("Document Model is running");