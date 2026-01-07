import User from "../models/userModel.js"
const user=await User.findOne({name:"Aditya"})
// console.log(user.id); //in document we recive we never see id but i has an id because its virtual property in schema

console.log(user.toJSON({virtuals:true})); //this will give the plain js object converting mongoose document in plain js object 
//if you have to see virtual proprties on object or document you retrived or found then you have to pass virtuals as true;

console.log(user.toObject({virtuals:true})); //same as the toJSON()

//so basically virtuals are the properties which are added on schema and not stored on the mongodb and at the time of retrivr and data virtuals will run its methods stored in schema and and attch the virtual property to the object or document we recive 

console.log(user.schema.virtuals);// we can see all virtuals properties and its getter and setter here 


//now suppose we have the long property name like thisdocumentcreatedAt like this then we can set its virtual propety so we can access it using shorter name 
//like createdAt and this is done using alias 
{
    /**
     * 
     *thisdocumentcreatedAt:{
       type:blha blha
       alias:createdAt //what will happend we can acces this property with real name as well as its alias which is virtuakl property createdAt 
     }
     */
}

console.log(user.getHobbies);
// user.getHobbies ="tabel tennnis, soccer, baseball"

user.save()