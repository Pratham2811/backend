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
        methods:{
           isAdult:function(){
           return  this.age>=18;
           },
           userSummary:function(options){
            if(options==='full'){
                return `${this.name} is ${this.age} yeard old.the hoobies of the ${this.name} are ${this.hobbies.join(',')}.`
            }else{
                return `${this.name} is ${this.age} old.`
            }
           }
        
        },
        statics:{
            findAdults:function(){
                return this.find({age:{$gte:18}})
            }
        },
        
    },
    
    {
        strict:'throw',
        timestamps:true,
    
    }
 )


const User=model("User",userSchema);

export default User
