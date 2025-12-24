

const userData=await User.findOne({age:{$lte:20}}).lean()
console.log(userData);


const user=await User.find({age:{$lte:20}}).lean()
console.log(userData);

//lean will remove unneccesary things and male application fast
