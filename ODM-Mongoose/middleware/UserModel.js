import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name field is required. Please enter the name."],
      minLength: [3, "Kripaya 3 letters ka naam type kariye"],
      trim: true,
      alias: "nam",
    },
    age: {
      type: Number,
      required: [true, "age field is required. Please enter the age."],
      min: 12,
    
    },
    email: {
      type: String,
      required: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email",
      ],
      lowercase: true,
      trim: true,
    },
      // validate: {
      //   validator() {
      //     return this.age % 2 === 0;
      //   },
      //   message: "age can only be an even number.",
      // },
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
    virtuals: {
      isAdult: {
        get() {
          return this.age >= 18;
        },
      },
      hobbiesString: {
        get() {
          return this.hobbies.join(", ");
        },
        set(value) {
          this.hobbies = [...this.hobbies, ...value.split(", ")];
        },
      },
    },
    methods: {
      getSummary(option) {
        if (option === "full") {
          return `${this.name} is ${this.age} years old and he has these hobbies: ${this.hobbies.join(", ")}.`;
        }
        return `${this.name} is ${this.age} years old.`;
      },
    },
    statics: {
      findByName(name) {
        return this.find({ name });
      },
      findOneByName(name) {
        return this.findOne({ name });
      },
      findByEmail(email) {
        return this.findOne({ email });
      },
    },
  }
);

userSchema.pre("find", async function (doc) {
  console.log("Running my query middleware");
    this.find({age:{$gte:18}})
    console.log(this);//Query Object
    
});
userSchema.pre("save", async function (doc) {
  console.log("Running my query middleware");
  console.log(this);//Document Object live in memory   
});

userSchema.post(/^find/, async function (doc) { //in post we revice docs in function arg  // runs on find, findOne, findById
  console.log("Running my query middleware");
 
  console.log(doc);
  
    // this.find({age:{$gte:18}})
});

userSchema.pre("insertMany",function(next,docs){
   console.log(this);
   console.log(docs);
   
})
userSchema.pre("insertMany",function(next,docs){
  for (const doc of docs) {
      console.log(doc);
      doc.email=doc.email.toLowerCase()
  }
})

const User = model("User", userSchema);

export default User;
