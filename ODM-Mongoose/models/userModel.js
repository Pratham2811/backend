import  {model , Schema } from "mongoose"
const userSchema=new Schema(
   {
       name:{
       type:String,
       required:true,
       min:3,
       trim:true,
    },
    email:{
        type:String,
        required:[true,"please enter email id to proceed"],
        // match:"^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"
       trim:true
    },
    age:{
        type:Number,
        required:true,
        min:12,
        
    },
    hobbies:[String],
    parentId:{
        type:Schema.ObjectId,
        required:function(){
          return   this.age<16
        },
        default:null
    }
    },
    
    {
        strict:'throw',
        timestamps:true,
    
    }
 )


const User=model("User",userSchema);
userSchema.methods.isAdult = function () {
  return this.age >= 18
}
export default User
