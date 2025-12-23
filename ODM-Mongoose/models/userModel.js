import mongoose, { Schema } from "mongoose"

// const userSchema={
//     name:{
//         type:String,
//         required:true,
//         min:3,
//         trim:true//anyone can add spaces and required will not check so we use trim so empty string with spaces cant pass validation
//     },
//     age:{
//         type:Number,
//         required:[true,"Age field is required please enter the the age"],
//         min:18
//     },

// }  //this is plane js object mngoose convert this into new schema which we will se below 

const userSchema=new mongoose.Schema(
    {
       name:{
       type:String,
       required:true,
       min:3,
       trim:true//anyone can add spaces and required will not check so we use trim so empty string with spaces cant pass validation
    },
    email:{
        type:String,
        required:[true,"please enter email id to proceed"],
        // match:"^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"
       trim:true
    },
    age:{
        type:Number,
        required:true,
        min:18,
        
    },
    hobbies:[String]
    },
    {
        strict:'throw',
        timestamps:true,
        versionKey:true
    }
 )


const User=mongoose.model("User",userSchema);
const data= await User.find();
console.log(data);
const insertData=await User.insertOne({name:"  Prathamesh madane",email:"  prathamesh123@gmail.com ",age:21,hobbies:["cricket"]})
console.log(insertData);


console.log("this is user model ");
