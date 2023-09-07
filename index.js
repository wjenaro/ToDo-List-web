import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";

// Using ES6 imports
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 8000;
//connection string
const dbName = 'tlist'; // Replace 'your-database-name' with your actual database name
const mongoDB = `mongodb+srv://coder:Gnaroh12@cluster0.9qaxudy.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Connected to database: ${dbName}`);
  })
  .catch((err) => {
    console.error('Error connecting to database:', err);
  });



app.set("view engine", "ejs");
// add styling
app.use(express.static("public"));
//use bodyParser
app.use(bodyParser.urlencoded({extended:true}));
// list objects to include in the list
const taskList = [
  "Wake up",
  ];


 




app.get("/", (req, res) => {
  // Render the EJS template with the task list
  res.render("index.ejs", { tasks: taskList });
});

// Define a route for the `/add` path
app.post("/add", (req, res) => {
  // Get the new todo item from the request body
  const newTask = req.body['todo'];
  // Add the new todo item to the task list
  taskList.push(newTask);
  // Redirect to the todo list page
  res.redirect("/");
});

app.post('/delete', (req, res) => {
   res.redirect('/');
});

// Listening to the server
app.listen(port, () => {
  console.log(`Server working at port ${port}`);
});
