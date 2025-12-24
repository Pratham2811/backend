import User from "./models/userModel.js";

const user= await User.findOne({name:"sansa"})
console.log(user.isAdult());
console.log(user.userSummary("full"));



