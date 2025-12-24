import User from "./models/userModel.js";

const user= await User.findOne({name:"Prathamesh madane"})
console.log(user.schema.methods.isAdult());



