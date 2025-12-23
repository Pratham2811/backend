import mongoose from "mongoose";


const client =    await mongoose.connect("mongodb://admin:admin@localhost")
console.log("mongodb is connected");
