// import mongoose from "mongoose";

// mongoose.set("bufferCommands",false)
// const client =    await mongoose.connect("mongodb://admin:admin@localhost")
// console.log("mongodb is connecting");

// mongoose.set('autoCreate',false)

import './db.js'
import './models/userModel.js'
import './crud/crud.js'
// import './methods.js'
// import "./Query/app.js"
import "./Query/document.js"
import "./populate.js"
console.log("App.js is running ");
