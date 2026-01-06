import mongoose from "mongoose";
import User from "./models/userModel.js";
const data=await User.findOne({name:'Aditya'}).populate("parentId");
console.log(data);

const data2=await User.findOne({name:"Aditya"}).populate({
    path:"parentId",
    select:"name age -_id"
})

console.log(data2);
