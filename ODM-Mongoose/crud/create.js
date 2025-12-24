const insertData=await User.insertOne(
    {
        name:"  Prathamesh madane",
        email:"  prathamesh123@gmail.com ",
        age:15,
        hobbies:["cricket"],
    parentId:"694ad37393999ec2e5341250"
    })
    


    //create method

    const createData=await User.create([{
     name:"sakshi",
        email:"  sakshi@gmail.com ",
        age:21,
        hobbies:["cricket"],
    parentId:"694ad37393999ec2e5341250"
},
{
     name:"Prathamesh madane",
        email:"prathamesh123@gmail.com",
        age:21,
        hobbies:["cricket"],
    parentId:"694ad37393999ec2e5341250"
}
])



const user=new User({
        name:"sansa",
        email:"  sansa@gmail.com ",
        age:18,
        hobbies:["cricket","movies","cooking","battels-of-bastards"],
        parentId:"694ad37393999ec2e5341250"
})
const writeOnDB= await user.save()
console.log(writeOnDB);


//this methoda create plane js object means remebers oops concept where the we create class and then object of that class same here we have all propertires of class User int obj user 
//write on db using this operation is user.save(); return promiss have to await 
