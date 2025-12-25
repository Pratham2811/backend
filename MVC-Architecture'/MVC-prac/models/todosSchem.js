import { model, Schema } from "mongoose";

const todoSchema=new Schema({
    title:{
        type:String,
        required:true,
        trim:true,

    },
    completed:{
        type:Boolean,
        required:true,
        default:false,
    }

},
{
    strict:'throw',
    timestamps:true,

})

const Todo=model("Todo",todoSchema);

export default Todo
