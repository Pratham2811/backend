
const user=await User.findOneAndDelete({name:'rob-start'})
console.log(user);