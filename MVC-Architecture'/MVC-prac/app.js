import express from "express";
import todoRoutes from "./routes/todoRoutes.js";
import { connectDB } from "./db.js";
import reactViews from "express-react-views"; 
import { createEngine } from "express-react-views";
const app = express();

const db = await connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(express.static("./public"))
app.use((req, res, next) => {
  req.db = db;
  next();
});
// ✅ Tell express where the views are
app.set("views",  "./views");

// ✅ tell express to use jsx views
app.set("view engine", "jsx");

// ✅ use express-react-views engine
app.engine("jsx", createEngine());
app.set('views',  './views');
app.set('view engine', 'jsx');
app.engine('jsx', createEngine());
app.use("/todos",todoRoutes);

app.listen(4000, () => {
  console.log(`Server is running`);
});
