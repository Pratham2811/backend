import mongoose from "mongoose";
import User from "./UserModel.js";

// const user = await User.findOne({ name:"Aditya" });

// user.age=20;
// user.save();
// const user=await User.insertMany( [
//     {

//   "name": "Ramesh",
//   "email": "ramesh@gmail.com",
//   "age": 72,
 
//   "hobbies": [
//     "cricket"
//   ],
//   "parentId": null,
//   "__v": 0
// },
// {
 
//   "name": "Ramesh",
//   "email": "RAMESH@gmail.com",
//   "age": 80,
 
//   "hobbies": [
//     "cricket"
//   ],
//   "parentId": null,
//   "__v": 0
// },
// {

//   "name": "Ramesh",
//   "email": "ramesh@gmail.com",
//   "age": 43,
  
//   "hobbies": [
//     "cricket"
//   ],
//   "parentId": null,
//   "__v": 0
// },
// {

//   "name": "Ramesh",
//   "email": "ramesh@gmail.com",
//   "age": 40,
 
//   "hobbies": [
//     "cricket"
//   ],
//   "parentId": null,
//   "__v": 0
// }
// ])

// console.log(user);

// await mongoose.disconnect();


try{
  const user={
  name: "prathamesh",
  age: 40,
  email: "prathameshmadane@gmail.com",
  hobbies: [
    "cricket"
  ],
  parentId: null,

  }
  const data=await User.insertOne(user);
  console.log(data);
  
}catch(error){
 console.log(error);
 
}
