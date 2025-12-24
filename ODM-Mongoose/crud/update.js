const user=await User.findOne({name:"sakshi"})
user.age=22;
user.save();

console.log(user);

//by default validation runs only for the create and save if you want to allow strict validation then you have to explicitly mention it while updating
//default update method skip validation
const user=await User.findOneAndUpdate(
    {age:19},
    {name:"rob-start",
    email:'rob-stark@gmail.com',
    age:19,
 },
    {
        new:true,
        runValidators:true,
        
      
    }
)

