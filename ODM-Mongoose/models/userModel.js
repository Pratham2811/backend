import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
      trim: true,
      alias: "n",
    },

    email: {
      type: String,
      required: [true, "please enter email id to proceed"],
      trim: true,
    },

    age: {
      type: Number,
      required: true,
      min: 12,
    },

    phone: {
      type: String,
      trim: true,
      validate: {
        validator: v => /^[6-9]\d{9}$/.test(v),
        message: "Enter valid Mobile number",
      },
    },

    hobbies: [String],

    parentId: {
      type: Schema.Types.ObjectId,
      required: function () {
        return this.age < 16;
      },
      default: null,
      ref: "User",
    },
  },
  {
    strict: "throw",
    timestamps: true,

    methods: {
      userSummary(options) {
        if (options === "full") {
          return `${this.name} is ${this.age} years old. Hobbies: ${this.hobbies.join(", ")}`;
        }
        return `${this.name} is ${this.age} years old.`;
      },
    },

    statics: {
      findAdults() {
        return this.find({ age: { $gte: 18 } });
      },
    },

    virtuals: {
      isAdult: {
        get() {
          return this.age >= 18;
        },
      },
       getHobbies: {
        get() {
            let concanitatedHobbies=this.hobbies.join(",")
          return concanitatedHobbies;
        },
        set(value){
          let hobbiesArray=value.split(",")
          console.log(hobbiesArray);
          for(const hobby of hobbiesArray){
            this.hobbies.push(hobby.trim())
          }
          
        }
      },
    },

    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
userSchema.pre("save",async function(next){
  this.find({age:{$gte:18}})
  
})
const User = model("User", userSchema);
export default User;
