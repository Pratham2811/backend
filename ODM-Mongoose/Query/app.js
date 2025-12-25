import User from "../models/userModel.js";

const q=  User.find()
q.select("name hobbies age")
q.sort({age:1})



// // //we get what projections we are applying
// console.log(q.projection());
// { name: 1, hobbies: 1 }

//what query we are applying is showin in this console.log
console.log(q.getQuery());
