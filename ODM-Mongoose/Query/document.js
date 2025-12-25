import User from "../models/userModel.js";

const user=new User({
    name:"sansa",
        email:"  sansa@gmail.com ",
        age:80,
        hobbies:["cricket","movies","cooking","battels-of-bastards"],
        parentId:"694ad37393999ec2e5341250"
})
// const data= await user.save() //insert doc to the db
const data=await User.find({age:80})
// console.log(user.isModified('age'));
console.log(user);
// console.log(user.modifiedPaths());
// console.log(user.toObject());
// console.log(await user.populate("email"));
//we can acces the schema defined methods on that document as well 

// console.log(user.userSummary("full"));

console.log(data);


