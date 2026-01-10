In Mongoose, document middleware are lifecycle hooks that run on a single document instance when that document is created, validated, saved, or removed using document methods.

They do not run on queries and do not run on bulk update operations.

What “Document” Means Here (Very Important)

A document is:

const user = new User({ name: "A" }); // ← document instance


This is not a query:

User.updateOne({ name: "A" }, { age: 20 }); // ❌ no document


Document middleware only runs when Mongoose has a real in-memory object to work with.

Supported Document Middleware Hooks
Hook	When It Runs
validate	Before validation
save	Before / after .save()
remove	Before / after .remove()
init	When document is loaded from DB
Core Example (Step-by-Step)
Code
userSchema.pre("save", function () {
  this.updatedAt = Date.now();
});

Execution Flow

You call user.save()

Mongoose creates a document instance

pre("save") runs

Document is written to MongoDB

post("save") runs (if defined)

Why this Matters

Inside document middleware:

this === the document


So you can:

Read fields → this.email

Modify fields → this.role = "user"

Check changes → this.isModified("password")

Real Production Example: Password Hashing
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await hash(this.password);
});

Why This Is Document Middleware

Needs raw password

Needs document context

Must run before save

Must not run on unrelated updates

What Triggers Document Middleware
✅ Triggers
doc.save()
doc.remove()
new Model()
Model.create()

❌ Does NOT Trigger
Model.updateOne()
Model.updateMany()
Model.findOneAndUpdate()
Model.findByIdAndUpdate()


Reason: No document instance exists.

Common Confusion (Critical)
“Why didn’t my middleware run?”

Because you used:

User.findOneAndUpdate(...)


There is no document in memory, so document middleware is skipped.